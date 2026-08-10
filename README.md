# Clock Mind — site estático para GitHub Pages

Site estático, elegante e responsivo para conteúdo introdutório de relojoaria, treinamentos e coleção pessoal.

## Arquitetura

- **Frontend:** HTML + CSS + JavaScript puro.
- **Hospedagem:** GitHub Pages (gratuito).
- **Backend:** Supabase Free (opcional, recomendado para a área "Minha coleção").
- **Banco:** PostgreSQL no Supabase.
- **Autenticação:** mecanismo próprio mínimo via funções SQL + token de sessão.
- **Dados do cadastro:** nome, sobrenome e hash bcrypt da senha.
- **Dados da coleção:** marca, modelo, ano opcional, categoria e observação opcional.

> A senha nunca é salva em texto puro. O banco armazena somente o hash bcrypt.

## 1. Criar o repositório

1. Crie um repositório no GitHub, por exemplo `clock-mind`.
2. Envie todos os arquivos deste projeto para a raiz do repositório.
3. Em **Settings → Pages**, selecione:
   - Source: **Deploy from a branch**
   - Branch: `main`
   - Folder: `/ (root)`
4. Salve e aguarde o GitHub Pages publicar.

## 2. Configurar o backend gratuito

O GitHub Pages não possui backend de escrita. Por isso, a área de coleção usa Supabase.

1. Crie um projeto gratuito em https://supabase.com/
2. Abra **SQL Editor**.
3. Copie e execute o conteúdo de `supabase/schema.sql`.
4. Em **Project Settings → API**, copie:
   - Project URL
   - chave `anon` / `public`
5. Abra `config.js`.
6. Preencha:
   `SUPABASE_URL`
   `SUPABASE_ANON_KEY`
7. Faça commit e push.

### Segurança

- Nunca coloque `service_role` no frontend.
- A chave `anon/public` é feita para uso no cliente.
- As tabelas têm RLS habilitado e acesso direto revogado para `anon`/`authenticated`.
- O frontend chama funções SQL `security definer`.
- A senha é transformada em hash bcrypt usando `pgcrypto`.
- A sessão é um token aleatório e expira em 30 dias.

## 3. Limitações importantes do cadastro

O pedido foi manter o cadastro mínimo. Por isso não existe e-mail, telefone, endereço ou data de nascimento.

Isso também significa que **não existe recuperação de senha por e-mail**.

Se o usuário esquecer a senha, a solução administrativa é criar outro cadastro ou implementar posteriormente um fluxo de recuperação separado.

## 4. Sobre o nome de usuário

O login atual usa **nome + senha**, mas o cadastro aceita nome e sobrenome.

O banco aplica unicidade à combinação nome + sobrenome.

Para um projeto público maior, considere adicionar um identificador público não sensível (por exemplo, um username) para evitar colisões de nomes comuns. Isso não é necessário para o protótipo.

## 5. Personalização visual

O site foi criado com:

- fundo marfim;
- tipografia serifada editorial;
- detalhes dourados discretos;
- alto contraste;
- bastante espaço negativo;
- microinterações mínimas;
- linguagem de “casa editorial”, em vez de estética de e-commerce.

Para trocar fontes, cores ou espaçamentos, edite `assets/styles.css`.

## 6. Estrutura

```text
/
├── index.html
├── config.js
├── config.example.js
├── README.md
├── assets/
│   ├── app.js
│   └── styles.css
└── supabase/
    └── schema.sql
```

## 7. Próxima evolução recomendada

Depois de publicar a primeira versão, as melhores evoluções seriam:

1. páginas individuais para cada aula;
2. vídeos incorporados do YouTube;
3. fichas técnicas de relógios;
4. comparador de relógios;
5. filtros por categoria, preço e movimento;
6. perfil visual da coleção;
7. checklist de treinamento com progresso salvo;
8. “analisador de compra” que avalia se um relógio adiciona algo à coleção;
9. área editorial com artigos;
10. modo escuro opcional.

## Licença

Você pode adaptar o projeto para uso pessoal ou para um projeto público. Verifique os direitos dos textos, imagens, logos e vídeos de terceiros antes de publicar conteúdo de terceiros.
