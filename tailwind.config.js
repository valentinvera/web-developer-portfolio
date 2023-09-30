/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "very-dark-gray": "#0a0a0b",
        gray: "#adadad",
        "light-gray": "#f8f8f8",
        "light-yellow": "#fbe850",
        "dark-gray": "#2e3038",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Prata", "sans-serif"],
      },
    },
  },
  plugins: [],
};
