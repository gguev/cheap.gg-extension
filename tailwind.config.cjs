/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.svelte",
    "./src/components/*.svelte",
    "./src/pages/content/*.{ts,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
