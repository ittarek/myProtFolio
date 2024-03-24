/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: ["light", "dark", "cupcake"],
  plugins: [ require("tailwind-scrollbar")],
};
