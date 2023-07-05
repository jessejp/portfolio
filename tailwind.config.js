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
      backgroundPosition: {
        "y-3rem": "0 3rem",
        "x--10rem": "-10rem 0",
      },
      gradientColorStopPositions: {
        "200%": "200%",
      },
      animation: {
        highlight: "highlight 1.5s linear 0.8s forwards",
        bgSlideTop: "bgSlideTop 0.2s linear forwards",
        bgSlideBottom: "bgSlideBottom 0.2s linear forwards",
        bgSildeRight: "bgSildeRight 0.14s linear forwards",
        bgSildeLeft: "bgSildeLeft 0.14s linear forwards",
      },
      keyframes: {
        highlight: {
          "0%, 25%": { backgroundColor: "rgb(253 224 71 / 1)" },
          "100%": { backgroundColor: "rgb(253 224 71 / 0)" },
        },
        bgSlideTop: {
          "0%": { backgroundPosition: "0 3rem", color: "#0000ff" },
          "100%": { backgroundPosition: "0 0rem", color: "#ffffff" },
        },
        bgSlideBottom: {
          "0%": { backgroundPosition: "0 0rem", color: "#ffffff" },
          "100%": { backgroundPosition: "0 3rem", color: "#0000ff" },
        },
        bgSildeRight: {
          "0%": { backgroundPosition: "-10rem 0", color: "#0000ff" },
          "100%": { backgroundPosition: "0rem 0", color: "#ffffff" },
        },
        bgSildeLeft: {
          "0%": { backgroundPosition: "0rem 0", color: "#ffffff" },
          "100%": { backgroundPosition: "-10rem 0", color: "#0000ff" },
        }
      },
    },
  },
  plugins: [],
};
