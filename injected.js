// injected.js — executed in the page context
// Overrides Page Visibility API and blocks visibility‑based playback restrictions

(function () {
  const override = {
    get() { return "visible"; },
    configurable: true
  };

  // Patch prototype first (this is what YT Music reads)
  try {
    Object.defineProperty(Document.prototype, "visibilityState", override);
    Object.defineProperty(Document.prototype, "hidden", {
      get() { return false; },
      configurable: true
    });
  } catch (e) {
    console.warn("[Unlock] prototype override failed:", e);
  }

  // Patch instance if still configurable
  try {
    Object.defineProperty(document, "visibilityState", override);
    Object.defineProperty(document, "hidden", {
      get() { return false; },
      configurable: true
    });
  } catch (e) {
    console.warn("[Unlock] instance override failed:", e);
  }

  // Block events
  document.addEventListener("visibilitychange", e => e.stopImmediatePropagation(), true);
  window.addEventListener("blur", e => e.stopImmediatePropagation(), true);
})();
