/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#21243D",
        primary: "#FF6464",
        secondary: "#00A8CC",
        light: "#8695A4",
      },
    },
    screens: {
      mobile: { max: "640px" },
      tablet: { min: "641px", max: "1024px" },
      desktop: { min: "1025px" },
    },
  },
  plugins: [],
};
