const defaultTheme = require("tailwindcss/defaultTheme");

/** Atom theme palette (primary #5540af, etc.) — see `public/assets/theme/tailwind.config.js` for the original reference. */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      header: ["Raleway", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#5540af",
      secondary: "#252426",
      white: "#ffffff",
      black: "#000000",
      yellow: "#f9e71c",
      lila: "#e6e5ec",
      grey: "#7c7c7c",
      "grey-10": "#6c6b6d",
      "grey-20": "#7c7c7c",
      "grey-30": "#919091",
      "grey-40": "#929293",
      "grey-50": "#f4f3f8",
      "grey-60": "#edebf6",
      "grey-70": "#d8d8d8",
      "grey-dark": "#4a4a4a",
      "hero-gradient-from": "rgba(85, 64, 174, 0.95)",
      "hero-gradient-to": "rgba(65, 47, 144, 0.93)",
      "blog-gradient-from": "#8f9098",
      "blog-gradient-to": "#222222",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      spacing: {
        18: "4.5rem",
      },
      zIndex: {
        60: "60",
        70: "70",
      },
      inset: {
        "2/5": "40%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
