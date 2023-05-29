/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro", "./src/**/*.jsx"],
  theme: {
    
    extend: {
      minHeight: {
        halfScreen: "50vh",
      },
      borderWidth: {
        0.5: "0.5px",
        1: "1px",
      },
      fontFamily: {
        brandFont: ["VT323", "sans-serif"],
        brandBread: ["Roboto", "sans-serif"],
      },
      colors: {
        "brandMain": "#0000ff",
      }
    },
  },
  plugins: [],
};
