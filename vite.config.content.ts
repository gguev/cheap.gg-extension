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
                content: resolve(pagesDir, "content", "index.ts"),
            },
            output: {
                entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`,
                format: "iife"
            },            
        },
    },
});

// make a pull request out of this?
// 