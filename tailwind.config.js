/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro", "./src/**/*.jsx"],
  theme: {
    extend: {
      minHeight: {
        halfScreen: ["50vh", "50svh"],
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
        brandMain: "#0000ff",
        link: "#0000ee",
        visited: "#551A8B",
      },
      animation: {
        highlight: "highlight 1.5s linear 0.8s forwards",
      },
      keyframes: {
        highlight: {
          "0%, 25%": { backgroundColor: "rgb(253 224 71 / 1)" },
          "100%": { backgroundColor: "rgb(253 224 71 / 0)" },
        },
      },
    },
  },
  plugins: [],
};
