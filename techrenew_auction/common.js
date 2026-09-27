/* techrenew — shared setup for every page. Load order: supabase-js → config.js → common.js */
(function(){
  "use strict";
  var cfg = window.TR_CONFIG || {};

  // Remember the URL fragment before supabase-js reads (and clears) it — pages use this to
  // spot a password-reset link ("type=recovery") or an expired link ("error_code=...").
  window.TR_URL_HASH = window.location.hash || "";

  // Supabase client, shared as window.sb (only on pages that load supabase-js)
  if (window.supabase && cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY) {
    window.sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
  }

  // Demo banner
  if (cfg.DEMO) {
    var bar = document.createElement("div");
    bar.setAttribute("role", "note");
    bar.style.cssText = "background:#E2A33D;color:#14171B;text-align:center;font:600 13px/1.4 Inter,sans-serif;" +
      "padding:7px 12px;";
    bar.textContent = "Demo — not a real store. Nothing here is for sale and no orders will be fulfilled.";
    document.body.insertBefore(bar, document.body.firstChild);
  }
})();
