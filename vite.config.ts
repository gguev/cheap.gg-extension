import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";
import { defineConfig } from "vite";

const srcDir = resolve(__dirname, "src");
const pagesDir = resolve(srcDir, "pages");

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    resolve: {
        alias: {
            src: srcDir,
        },
    },
    build: {
        emptyOutDir: false,
        rollupOptions: {
            input: {
                background: resolve(pagesDir, "background", "index.ts"),
                //content: resolve(pagesDir, "content", "index.ts"),
                options: resolve(pagesDir, "options", "index.html"),
                popup: resolve(pagesDir, "popup", "index.html"),
            },
            output: {
                entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`,
            },            
        },
    },
});

// content script needs to be outputted as 'iife'
// other files don't need format

// SOLUTIONS
// create 2 vite configs 
// edit 'npm run dev' script to run both vite.config.ts and vite.config.content.ts