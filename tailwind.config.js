/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    minHeight: {
      'fullHalf': '66vh',
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
