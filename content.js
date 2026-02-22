// content.js — executed in the extension's isolated world
// Injects the real patch script into the page context

(function () {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('injected.js');
  script.type = 'text/javascript';

  // Append to page so it runs in the page's JS environment
  document.documentElement.appendChild(script);

  // Remove the tag after execution to keep DOM clean
  script.remove();
})();
