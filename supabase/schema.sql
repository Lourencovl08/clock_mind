-- CLOCK MIND HOROLÓGICO — BACKEND MÍNIMO
-- Plataforma: Supabase Free
-- O cadastro armazena apenas:
--   1) nome
--   2) sobrenome
--   3) hash da senha
-- Não use service_role key no frontend.
--
-- Execute este arquivo inteiro no Supabase > SQL Editor.
--
-- IMPORTANTE:
-- A senha NUNCA é armazenada em texto puro. O banco armazena apenas um hash bcrypt.
-- As funções abaixo são a API pública do site. Elas não expõem a tabela diretamente.

create extension if not exists pgcrypto;

create table if not exists public.app_users (
  id uuid primary key default gen_random_uuid(),
  first_name text not null check (char_length(first_name) between 1 and 60),
  last_name text not null check (char_length(last_name) between 1 and 80),
  password_hash text not null,
  created_at timestamptz not null default now()
);

create unique index if not exists app_users_first_name_unique
  on public.app_users (lower(first_name), lower(last_name));

create table if not exists public.sessions (
  token text primary key,
  user_id uuid not null references public.app_users(id) on delete cascade,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '30 days')
);

create index if not exists sessions_user_id_idx on public.sessions(user_id);
create index if not exists sessions_expires_at_idx on public.sessions(expires_at);

create table if not exists public.watches (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.app_users(id) on delete cascade,
  brand text not null check (char_length(brand) between 1 and 80),
  model text not null check (char_length(model) between 1 and 120),
  year integer,
  category text not null default 'Outro',
  notes text,
  created_at timestamptz not null default now()
);

create index if not exists watches_user_id_idx on public.watches(user_id);

-- Não permita acesso direto às tabelas pela chave anon.
alter table public.app_users enable row level security;
alter table public.sessions enable row level security;
alter table public.watches enable row level security;

revoke all on public.app_users from anon, authenticated;
revoke all on public.sessions from anon, authenticated;
revoke all on public.watches from anon, authenticated;

-- Remove sessões expiradas ocasionalmente durante operações.
create or replace function public.cleanup_expired_sessions()
returns void
language sql
security definer
set search_path = public
as $$
  delete from public.sessions where expires_at < now();
$$;

create or replace function public.register_user(
  p_first_name text,
  p_last_name text,
  p_password text
)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user public.app_users;
  v_token text;
begin
  if char_length(trim(p_first_name)) < 1 or char_length(trim(p_last_name)) < 1 then
    raise exception 'Nome e sobrenome são obrigatórios.';
  end if;

  if char_length(p_password) < 8 then
    raise exception 'A senha deve ter pelo menos 8 caracteres.';
  end if;

  if exists (
    select 1 from public.app_users
    where lower(first_name) = lower(trim(p_first_name))
      and lower(last_name) = lower(trim(p_last_name))
  ) then
    raise exception 'Esse cadastro já existe.';
  end if;

  insert into public.app_users(first_name, last_name, password_hash)
  values (trim(p_first_name), trim(p_last_name), crypt(p_password, gen_salt('bf', 12)))
  returning * into v_user;

  v_token := encode(gen_random_bytes(32), 'hex');
  insert into public.sessions(token, user_id) values(v_token, v_user.id);

  return json_build_object(
    'session_token', v_token,
    'user', json_build_object(
      'id', v_user.id,
      'first_name', v_user.first_name,
      'last_name', v_user.last_name
    )
  );
end;
$$;

create or replace function public.login_user(
  p_first_name text,
  p_password text
)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user public.app_users;
  v_token text;
begin
  select * into v_user
  from public.app_users
  where lower(first_name) = lower(trim(p_first_name))
    and password_hash = crypt(p_password, password_hash)
  limit 1;

  if v_user.id is null then
    raise exception 'Credenciais inválidas.';
  end if;

  perform public.cleanup_expired_sessions();

  v_token := encode(gen_random_bytes(32), 'hex');
  insert into public.sessions(token, user_id) values(v_token, v_user.id);

  return json_build_object(
    'session_token', v_token,
    'user', json_build_object(
      'id', v_user.id,
      'first_name', v_user.first_name,
      'last_name', v_user.last_name
    )
  );
end;
$$;

create or replace function public.session_user(p_session_token text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user public.app_users;
begin
  select u.* into v_user
  from public.sessions s
  join public.app_users u on u.id = s.user_id
  where s.token = p_session_token
    and s.expires_at > now();

  if v_user.id is null then
    return json_build_object('user', null);
  end if;

  return json_build_object(
    'user', json_build_object(
      'id', v_user.id,
      'first_name', v_user.first_name,
      'last_name', v_user.last_name
    )
  );
end;
$$;

create or replace function public.list_watches(p_session_token text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid;
begin
  select user_id into v_user_id from public.sessions
  where token = p_session_token and expires_at > now();

  if v_user_id is null then raise exception 'Sessão inválida ou expirada.'; end if;

  return coalesce(
    (select json_agg(w order by w.created_at desc) from public.watches w where w.user_id = v_user_id),
    '[]'::json
  );
end;
$$;

create or replace function public.add_watch(
  p_session_token text,
  p_brand text,
  p_model text,
  p_year integer default null,
  p_category text default 'Outro',
  p_notes text default null
)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid;
  v_watch public.watches;
begin
  select user_id into v_user_id from public.sessions
  where token = p_session_token and expires_at > now();

  if v_user_id is null then raise exception 'Sessão inválida ou expirada.'; end if;

  insert into public.watches(user_id, brand, model, year, category, notes)
  values(v_user_id, trim(p_brand), trim(p_model), p_year, trim(p_category), nullif(trim(p_notes), ''))
  returning * into v_watch;

  return row_to_json(v_watch);
end;
$$;

create or replace function public.delete_watch(
  p_session_token text,
  p_watch_id uuid
)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid;
begin
  select user_id into v_user_id from public.sessions
  where token = p_session_token and expires_at > now();

  if v_user_id is null then raise exception 'Sessão inválida ou expirada.'; end if;

  delete from public.watches where id = p_watch_id and user_id = v_user_id;
  return json_build_object('ok', true);
end;
$$;

grant execute on function public.register_user(text,text,text) to anon;
grant execute on function public.login_user(text,text) to anon;
grant execute on function public.session_user(text) to anon;
grant execute on function public.list_watches(text) to anon;
grant execute on function public.add_watch(text,text,text,integer,text,text) to anon;
grant execute on function public.delete_watch(text,uuid) to anon;

-- Opcional: impede que o navegador descubra a tabela via PostgREST.
-- As funções acima continuam disponíveis.
