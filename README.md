# Cheap.gg (Extension) [WIP]

Cheap.gg is a service that finds cheap game keys and adds them to the Steam store. The extension portion of the app overlays a widget on top of Steam showing the cheapest key available.

## Features

-   [Svelte](https://svelte.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [DaisyUI](https://daisyui.com/)
-   [Chrome Extensions Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)

## Development

```bash
# install dependencies
npm i

# build the content script to `/dist` directory
# vite.build.watch rebuilds when modules have changed on disk
npm run dev:content 

# in another terminal, build the rest of the app (background page, options page, popup page, etc)
# this also rebuilds when changes are made 
npm run dev:pages 
```

*NOTE: `vite.config.content.ts` and `vite.config.ts` run concurrently

## Build

```bash
# build files to `/dist` directory
$ npm run build
```

## Load unpacked extensions

[Getting Started Tutorial](https://developer.chrome.com/docs/extensions/mv3/getstarted/)

1. Open the Extension Management page by navigating to `chrome://extensions`.
2. Enable Developer Mode by clicking the toggle switch next to `Developer mode`.
3. Click the `LOAD UNPACKED` button and select the `/dist` directory.

![Example](https://wd.imgix.net/image/BhuKGJaIeLNPW9ehns59NfwqKxF2/vOu7iPbaapkALed96rzN.png?auto=format&w=571)

