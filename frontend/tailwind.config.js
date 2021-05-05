const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      fontFamily: {
        "header-bold": "Open Sans Bold",
        "header-light": "Open Sans Light",
        "header-medium": "Open Sans Medium",
        "body-light": "Nunito Sans Light",
        "body-roman": "Nunito Sans Roman",
        "body-medium": "Nunito Sans Medium",
        "body-bold": "Nunito Sans Bold",
      },
      colors: {
        purple: "#8b5cf6",
        green: "#1DB954",
        dark: "#121212",
        light: "#282828",
        darker: "#181818",
        lightest: "#B3B3B3",
        darkest: "#191414",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
