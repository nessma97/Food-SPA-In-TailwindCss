/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e1f28",
        secondary: "#c50f4d",
        darkshade: {
          300: "#181818",
          100: "#333333",
          50: "#7a7979",
        },
      },
      fontFamily: {
        Nunito: ["Nunito"],
      },
    },
  },
  plugins: [],
};
