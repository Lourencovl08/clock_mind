(() => {
  const config = window.APP_CONFIG || {};

  const hasBackend = Boolean(
    config.SUPABASE_URL && config.SUPABASE_ANON_KEY
  );

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [
    ...root.querySelectorAll(selector)
  ];

  // =========================
  // MOBILE MENU
  // =========================

  $(".menu-toggle")?.addEventListener("click", () => {
    $(".nav")?.classList.toggle("open");
  });

  $$(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      $(".nav")?.classList.remove("open");
    });
  });

  // =========================
  // AUTH TABS
  // =========================

  $$(".auth-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      $$(".auth-tab").forEach((item) => {
        item.classList.remove("active");
      });

      tab.classList.add("active");

      const mode = tab.dataset.auth;

      $("#login-form")?.classList.toggle(
        "hidden",
        mode !== "login"
      );

      $("#register-form")?.classList.toggle(
        "hidden",
        mode !== "register"
      );
    });
  });

  // =========================
  // SESSION
  // =========================

  let sessionToken =
    localStorage.getItem("atlas_session") || "";

  let currentUser = null;

  // =========================
  // SUPABASE RPC
  // =========================

  async function rpc(fn, body) {
    if (!hasBackend) {
      throw new Error("BACKEND_NOT_CONFIGURED");
    }

    const response = await fetch(
      `${config.SUPABASE_URL}/rest/v1/rpc/${fn}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "apikey": config.SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${config.SUPABASE_ANON_KEY}`
        },

        body: JSON.stringify(body || {})
      }
    );

    const data = await response
      .json()
      .catch(() => null);

    if (!response.ok) {
      throw new Error(
        data?.message ||
        data?.error ||
        "Erro na comunicação com o servidor."
      );
    }

    return data;
  }

  // =========================
  // MESSAGES
  // =========================

  function message(id, text, ok = false) {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    element.textContent = text || "";
    element.style.color = ok ? "#355f4e" : "";
  }

  function backendHint(id) {
    if (!hasBackend) {
      message(
        id,
        "Cadastro ainda não configurado. Veja README.md e supabase/schema.sql."
      );
    }
  }

  // =========================
  // REGISTER
  // =========================

  $("#register-form")?.addEventListener(
    "submit",
    async (event) => {
      event.preventDefault();

      const form = event.currentTarget;
      const formData = new FormData(form);

      message(
        "register-message",
        "Criando cadastro..."
      );

      try {
        const data = await rpc("register_user", {
          p_first_name: formData
            .get("first_name")
            .trim(),

          p_last_name: formData
            .get("last_name")
            .trim(),

          p_password: formData.get("password")
        });

        sessionToken = data.session_token;
        currentUser = data.user;

        localStorage.setItem(
          "atlas_session",
          sessionToken
        );

        message(
          "register-message",
          "Cadastro criado.",
          true
        );

        showCollection();

        await loadWatches();

      } catch (error) {
        if (
          error.message ===
          "BACKEND_NOT_CONFIGURED"
        ) {
          backendHint("register-message");
        } else {
          message(
            "register-message",
            error.message
          );
        }
      }
    }
  );

  // =========================
  // LOGIN
  // =========================

  $("#login-form")?.addEventListener(
    "submit",
    async (event) => {
      event.preventDefault();

      const form = event.currentTarget;
      const formData = new FormData(form);

      message(
        "login-message",
        "Entrando..."
      );

      try {
        const data = await rpc("login_user", {
          p_first_name: formData
            .get("first_name")
            .trim(),

          p_password: formData.get("password")
        });

        sessionToken = data.session_token;
        currentUser = data.user;

        localStorage.setItem(
          "atlas_session",
          sessionToken
        );

        message(
          "login-message",
          "Login realizado.",
          true
        );

        showCollection();

        await loadWatches();

      } catch (error) {
        if (
          error.message ===
          "BACKEND_NOT_CONFIGURED"
        ) {
          backendHint("login-message");
        } else {
          message(
            "login-message",
            "Nome ou senha inválidos."
          );
        }
      }
    }
  );

  // =========================
  // LOGOUT
  // =========================

  $("#logout")?.addEventListener(
    "click",
    () => {
      sessionToken = "";
      currentUser = null;

      localStorage.removeItem(
        "atlas_session"
      );

      $("#collection-app")?.classList.add(
        "hidden"
      );

      $("#auth-card")?.classList.remove(
        "hidden"
      );
    }
  );

  // =========================
  // SHOW COLLECTION
  // =========================

  function showCollection() {
    $("#auth-card")?.classList.add("hidden");

    $("#collection-app")?.classList.remove(
      "hidden"
    );

    if (currentUser) {
      $("#user-name").textContent =
        `${currentUser.first_name}${
          currentUser.last_name
            ? " " + currentUser.last_name
            : ""
        }`;
    }
  }

  // =========================
  // LOAD SESSION
  // =========================

  async function loadSession() {
    if (!sessionToken || !hasBackend) {
      return;
    }

    try {
      const data = await rpc(
        "session_user",
        {
          p_session_token: sessionToken
        }
      );

      if (data?.user) {
        currentUser = data.user;

        showCollection();

        await loadWatches();

      } else {
        localStorage.removeItem(
          "atlas_session"
        );

        sessionToken = "";
      }

    } catch (error) {
      localStorage.removeItem(
        "atlas_session"
      );

      sessionToken = "";
    }
  }

  // =========================
  // LOAD WATCHES
  // =========================

  async function loadWatches() {
    try {
      const watches = await rpc(
        "list_watches",
        {
          p_session_token: sessionToken
        }
      );

      renderWatches(watches || []);

    } catch (error) {
      renderWatches([]);

      message(
        "watch-message",
        error.message
      );
    }
  }

  // =========================
  // RENDER WATCHES
  // =========================

  function renderWatches(watches) {
    const grid = $("#watch-grid");

    if (!grid) {
      return;
    }

    if (!watches.length) {
      grid.innerHTML = `
        <div class="empty-state">
          Sua coleção ainda está vazia.
          Adicione o primeiro relógio acima.
        </div>
      `;

      return;
    }

    grid.innerHTML = watches
      .map(
        (watch) => `
          <article class="watch-tile">

            <span class="watch-category">
              ${escapeHtml(
                watch.category || "Outro"
              )}
            </span>

            <h4>
              ${escapeHtml(
                watch.brand || ""
              )}
              ${escapeHtml(
                watch.model || ""
              )}
            </h4>

            <p>
              ${
                watch.year
                  ? escapeHtml(
                      String(watch.year)
                    )
                  : "Ano não informado"
              }
            </p>

            ${
              watch.notes
                ? `
                  <div class="watch-notes">
                    ${escapeHtml(
                      watch.notes
                    )}
                  </div>
                `
                : ""
            }

            <button
              type="button"
              data-delete="${escapeHtml(
                String(watch.id)
              )}"
            >
              Remover
            </button>

          </article>
        `
      )
      .join("");

    $$("[data-delete]", grid).forEach(
      (button) => {
        button.addEventListener(
          "click",
          async () => {
            if (
              !confirm(
                "Remover este relógio da coleção?"
              )
            ) {
              return;
            }

            try {
              await rpc(
                "delete_watch",
                {
                  p_session_token:
                    sessionToken,

                  p_watch_id:
                    button.dataset.delete
                }
              );

              await loadWatches();

            } catch (error) {
              message(
                "watch-message",
                error.message
              );
            }
          }
        );
      }
    );
  }

  // =========================
  // ADD WATCH
  // =========================

  $("#watch-form")?.addEventListener(
    "submit",
    async (event) => {
      event.preventDefault();

      // IMPORTANTE:
      // Guardamos a referência do formulário
      // antes do await para evitar:
      // "Cannot read properties of null
      // (reading 'reset')"

      const form = event.currentTarget;

      const formData = new FormData(form);

      message(
        "watch-message",
        "Salvando..."
      );

      try {
        await rpc("add_watch", {
          p_session_token:
            sessionToken,

          p_brand: formData
            .get("brand")
            .trim(),

          p_model: formData
            .get("model")
            .trim(),

          p_year: formData.get("year")
            ? Number(
                formData.get("year")
              )
            : null,

          p_category:
            formData.get("category"),

          p_notes: formData
            .get("notes")
            .trim()
        });

        // Limpa o formulário usando
        // a referência salva antes do await.
        form.reset();

        message(
          "watch-message",
          "Relógio adicionado.",
          true
        );

        await loadWatches();

      } catch (error) {
        message(
          "watch-message",
          error.message
        );
      }
    }
  );

  // =========================
  // ESCAPE HTML
  // =========================

  function escapeHtml(value) {
    return String(value).replace(
      /[&<>"']/g,
      (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      })[character]
    );
  }

  // =========================
  // START
  // =========================

  loadSession();

})();
