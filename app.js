(() => {
  const config = window.APP_CONFIG || {};
  const hasBackend = Boolean(config.SUPABASE_URL && config.SUPABASE_ANON_KEY);

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  // Mobile menu
  $(".menu-toggle")?.addEventListener("click", () => $(".nav").classList.toggle("open"));
  $$(".nav a").forEach(a => a.addEventListener("click", () => $(".nav").classList.remove("open")));

  // Auth tabs
  $$(".auth-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      $$(".auth-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const mode = tab.dataset.auth;
      $("#login-form").classList.toggle("hidden", mode !== "login");
      $("#register-form").classList.toggle("hidden", mode !== "register");
    });
  });

  let sessionToken = localStorage.getItem("atlas_session") || "";
  let currentUser = null;

  async function rpc(fn, body) {
    if (!hasBackend) throw new Error("BACKEND_NOT_CONFIGURED");
    const response = await fetch(`${config.SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": config.SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${config.SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify(body || {})
    });
    const data = await response.json().catch(() => null);
    if (!response.ok) throw new Error(data?.message || data?.error || "Erro na comunicação com o servidor.");
    return data;
  }

  function message(id, text, ok = false) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = text || "";
    el.style.color = ok ? "#355f4e" : "";
  }

  function backendHint(id) {
    if (!hasBackend) message(id, "Cadastro ainda não configurado. Veja README.md e supabase/schema.sql.");
  }

  $("#register-form")?.addEventListener("submit", async e => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    message("register-message", "Criando cadastro...");
    try {
      const data = await rpc("register_user", {
        p_first_name: fd.get("first_name").trim(),
        p_last_name: fd.get("last_name").trim(),
        p_password: fd.get("password")
      });
      sessionToken = data.session_token;
      currentUser = data.user;
      localStorage.setItem("atlas_session", sessionToken);
      message("register-message", "Cadastro criado.", true);
      showCollection();
      await loadWatches();
    } catch (err) {
      if (err.message === "BACKEND_NOT_CONFIGURED") backendHint("register-message");
      else message("register-message", err.message);
    }
  });

  $("#login-form")?.addEventListener("submit", async e => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    message("login-message", "Entrando...");
    try {
      const data = await rpc("login_user", {
        p_first_name: fd.get("first_name").trim(),
        p_password: fd.get("password")
      });
      sessionToken = data.session_token;
      currentUser = data.user;
      localStorage.setItem("atlas_session", sessionToken);
      message("login-message", "Login realizado.", true);
      showCollection();
      await loadWatches();
    } catch (err) {
      if (err.message === "BACKEND_NOT_CONFIGURED") backendHint("login-message");
      else message("login-message", "Nome ou senha inválidos.");
    }
  });

  $("#logout")?.addEventListener("click", () => {
    sessionToken = "";
    currentUser = null;
    localStorage.removeItem("atlas_session");
    $("#collection-app").classList.add("hidden");
    $("#auth-card").classList.remove("hidden");
  });

  function showCollection() {
    $("#auth-card").classList.add("hidden");
    $("#collection-app").classList.remove("hidden");
    $("#user-name").textContent = `${currentUser.first_name}${currentUser.last_name ? " " + currentUser.last_name : ""}`;
  }

  async function loadSession() {
    if (!sessionToken || !hasBackend) return;
    try {
      const data = await rpc("session_user", { p_session_token: sessionToken });
      if (data?.user) {
        currentUser = data.user;
        showCollection();
        await loadWatches();
      } else {
        localStorage.removeItem("atlas_session");
        sessionToken = "";
      }
    } catch (_) {
      localStorage.removeItem("atlas_session");
      sessionToken = "";
    }
  }

  async function loadWatches() {
    try {
      const watches = await rpc("list_watches", { p_session_token: sessionToken });
      renderWatches(watches || []);
    } catch (err) {
      renderWatches([]);
      message("watch-message", err.message);
    }
  }

  function renderWatches(watches) {
    const grid = $("#watch-grid");
    if (!watches.length) {
      grid.innerHTML = `<div class="empty-state">Sua coleção ainda está vazia. Adicione o primeiro relógio acima.</div>`;
      return;
    }
    grid.innerHTML = watches.map(w => `
      <article class="watch-tile">
        <span class="watch-category">${escapeHtml(w.category || "Outro")}</span>
        <h4>${escapeHtml(w.brand)} ${escapeHtml(w.model)}</h4>
        <p>${w.year ? escapeHtml(String(w.year)) : "Ano não informado"}</p>
        ${w.notes ? `<p>${escapeHtml(w.notes)}</p>` : ""}
        <button data-delete="${w.id}">Remover</button>
      </article>
    `).join("");

    $$("[data-delete]", grid).forEach(btn => btn.addEventListener("click", async () => {
      if (!confirm("Remover este relógio da coleção?")) return;
      try {
        await rpc("delete_watch", { p_session_token: sessionToken, p_watch_id: btn.dataset.delete });
        await loadWatches();
      } catch (err) {
        message("watch-message", err.message);
      }
    }));
  }

  $("#watch-form")?.addEventListener("submit", async e => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    message("watch-message", "Salvando...");
    try {
      await rpc("add_watch", {
        p_session_token: sessionToken,
        p_brand: fd.get("brand").trim(),
        p_model: fd.get("model").trim(),
        p_year: fd.get("year") ? Number(fd.get("year")) : null,
        p_category: fd.get("category"),
        p_notes: fd.get("notes").trim()
      });
      e.currentTarget.reset();
      message("watch-message", "Relógio adicionado.", true);
      await loadWatches();
    } catch (err) {
      message("watch-message", err.message);
    }
  });

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, c => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[c]));
  }

  loadSession();
})();
