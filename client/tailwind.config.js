/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#EBBCD8",
          300: "#EB8DC4",
          400: "#EB50AB",
          500: "#EB1E97",
          800: "#9B176C",
          900: "#570A57",
        },
        secondary: {
          200: "#888299",
          300: "#5B566B",
          400: "#50466B",
          500: "#43346B",
          800: "#28083F",
          900: "#1E192E",
        },
        neutral: {
          200: "#F3F3F3",
          300: "#B5B5B5",
          400: "#6A6A6A",
          500: "#1E1E1E",
          800: "#0C0C0C",
        },
        success: {
          500: "#2E5F17",
        },
        rarity: {
          uncommon: "#00EA97",
          rare: "#0065FC",
          epic: "#9626F6",
          legendary: "#F88527",
          exotic: "#00CAFC",
          unique: "#FDC515",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
