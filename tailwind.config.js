/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homebg: "url('./assets/homebg.png')",
      },
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
