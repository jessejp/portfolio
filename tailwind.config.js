/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro", "./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        xxs: "320px",
      },
      minHeight: {
        halfScreen: ["50vh", "50svh"],
        56: "14rem",
      },
      maxHeight: {
        100: "25rem",
        112: "28rem",
      },
      borderWidth: {
        0.5: "0.5px",
        1: "1px",
        3: "3px",
      },
      width: {
        inherit: "inherit",
      },
      maxWidth: {
        "9xl": "90rem",
      },
      spacing: {
        "1/5": "20%",
        18: "4.5rem",
        46: "11.5rem",
      },
      margin: {
        0.75: "0.1875rem",
      },
      scale: {
        101: "1.01",
        "101h": "1.01",
      },
      fontFamily: {
        brandFont: ["VT323", "monospace"],
        brandBread: ["Inter", "Roboto", "sans-serif"],
      },
      colors: {
        brandMain: "#0000ff",
        link: "#0000ee",
        visited: "#551A8B",
        superYellow: "#ffff00",
      },
      backgroundPosition: {
        "y-6rem": "0 6rem",
        "y--6rem": "0 -6rem",
        "x--15rem": "-15rem 0",
      },
      gradientColorStopPositions: {
        "200%": "200%",
      },
      boxShadow: {
        "hard-left": "-4px 4px",
        "hard-right": "4px 4px",
      },
      animation: {
        highlight: "highlight 1.5s linear 0.8s forwards",
        copied: "copied 0.6s linear 0s forwards",
        bgSlideTop: "bgSlideTop 0.11s linear forwards",
        bgSlideBottom: "bgSlideBottom 0.11s linear forwards",
        bgSlideTopAlt: "bgSlideTopAlt 0.11s linear forwards",
        bgSlideBottomAlt: "bgSlideBottomAlt 0.11s linear forwards",
        bgSlideRight: "bgSlideRight 0.09s linear forwards",
        bgSlideLeft: "bgSlideLeft 0.09s linear forwards",
        bgSlideRightAlt: "bgSlideRightAlt 0.09s linear forwards",
        bgSlideLeftAlt: "bgSlideLeftAlt 0.09s linear forwards",
        mobileMenuSlideFromTop: "mobileMenuSlideFromTop 0.3s ease-in-out",
        mobileMenuSlideToTop: "mobileMenuSlideToTop 0.3s ease-in-out",
      },
      keyframes: {
        highlight: {
          "0%, 25%": { backgroundColor: "rgb(255 255 0 / 1)" },
          "100%": { backgroundColor: "rgb(255 255 0 / 0)" },
        },
        copied: {
          "0%, 25%": { backgroundColor: "rgb(0 255 0 / 1)" },
          "100%": { backgroundColor: "rgb(0 255 0 / 0)" },
        },
        bgSlideTop: {
          "0%": {
            backgroundPosition: "0 6rem",
            color: "#0000ff",
            fill: "#0000ff",
          },
          "100%": {
            backgroundPosition: "0 0rem",
            color: "#ffffff",
            fill: "#ffffff",
          },
        },
        bgSlideBottom: {
          "0%": {
            backgroundPosition: "0 0rem",
            color: "#ffffff",
            fill: "#ffffff",
          },
          "100%": {
            backgroundPosition: "0 6rem",
            color: "#0000ff",
            fill: "#0000ff",
          },
        },
        bgSlideTopAlt: {
          "0%": {
            backgroundPosition: "0 6rem",
            color: "#0000ff",
            fill: "#0000ff",
          },
          "100%": {
            backgroundPosition: "0 0rem",
            color: "#ffffff",
            fill: "#ffffff",
          },
        },
        bgSlideBottomAlt: {
          "0%": {
            backgroundPosition: "0 0rem",
            color: "#ffffff",
            fill: "#ffffff",
          },
          "100%": {
            backgroundPosition: "0 6rem",
            color: "#0000ff",
            fill: "#0000ff",
          },
        },
        bgSlideRight: {
          "0%": {
            backgroundPosition: "-15rem 0",
            color: "#0000ff",
            fill: "#0000ff",
          },
          "100%": {
            backgroundPosition: "0rem 0",
            color: "#ffffff",
            fill: "#ffffff",
          },
        },
        bgSlideLeft: {
          "0%": {
            backgroundPosition: "0rem 0",
            color: "#ffffff",
            fill: "#ffffff",
          },
          "100%": {
            backgroundPosition: "-15rem 0",
            color: "#0000ff",
            fill: "#0000ff",
          },
        },
        bgSlideRightAlt: {
          "0%": {
            backgroundPosition: "15rem 0",
            color: "#ffffff",
            fill: "#ffffff",
          },
          "100%": {
            backgroundPosition: "0rem 0",
            color: "#0000ff",
            fill: "#0000ff",
          },
        },
        bgSlideLeftAlt: {
          "0%": { backgroundPosition: "0rem 0", color: "#0000ff" },
          "100%": { backgroundPosition: "15rem 0", color: "#ffffff" },
        },
        mobileMenuSlideFromTop: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        mobileMenuSlideToTop: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
