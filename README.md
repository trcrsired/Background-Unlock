# Background Unlock

Background Unlock is a lightweight browser extension that prevents websites from pausing media playback when a tab becomes inactive, hidden, or loses focus. Many modern sites use the Page Visibility API or blur‑based event listeners to enforce automatic pause behavior. This extension disables those restrictions to allow continuous background playback.

---

## Features

- Prevents media from pausing when switching tabs or minimizing the browser  
- Blocks `visibilitychange` events before site scripts receive them  
- Blocks `blur` events used by some players to detect focus loss  
- Forces `document.visibilityState` to always return `"visible"`  
- Forces `document.hidden` to always return `false`  
- Works automatically on supported domains  
- Zero configuration required

---

## How It Works

Background Unlock injects a small script into the page context at document start.  
This script overrides visibility‑related APIs and intercepts events that sites commonly use to pause media when the tab is not active.

The extension does **not** modify network requests, cookies, or user data.  
It only affects JavaScript visibility signals inside the page.

---

## Supported Domains

The extension currently activates on:

- `*.youtube.com`
- `*.youtube-nocookie.com`
- `*.vimeo.com`

Additional domains can be added easily by modifying the `matches` section in `manifest.json`.

---
