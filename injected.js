// injected.js — executed in the page context
// Overrides Page Visibility API and blocks visibility‑based playback restrictions

(function () {
  // Block visibilitychange events before site scripts receive them
  document.addEventListener(
    'visibilitychange',
    function (e) {
      console.log('[Background Unlock] visibilitychange blocked');
      e.stopImmediatePropagation();
    },
    true // capture phase
  );

  // Block blur events (some players use blur to pause playback)
  window.addEventListener(
    'blur',
    function (e) {
      console.log('[Background Unlock] blur blocked');
      e.stopImmediatePropagation();
    },
    true
  );

  // Force the page to always appear visible
  Object.defineProperty(document, 'visibilityState', {
    get: function () {
      return 'visible';
    }
  });

  Object.defineProperty(document, 'hidden', {
    get: function () {
      return false;
    }
  });

  console.log('[Background Unlock] Page Visibility API patched');
})();
