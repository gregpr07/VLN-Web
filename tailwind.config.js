const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          50: "#FFF7ED",
          100: "#FFE5EB",
          200: "#FFD6DE",
          300: "#FFB7C6",
          400: "#FF5C7E",
          500: "#FF2E59",
          600: "#FF0035",
          700: "#D6002D",
          800: "#AD0024",
          900: "#85001C",
        },
      },
      fontFamily: {
        sans: ["ProximaVara", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: "14px",
        sm: "16px",
        base: "18px",
        lg: "20px",
        xl: "22px",
        "2xl": "26px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "52px",
        "6xl": "64px",
        "7xl": "76px",
        "8xl": "100px",
        // ...defaultTheme.fontSize,
      },
    },

    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 350,
      medium: 450,
      semibold: 550,
      bold: 580,
      extrabold: 750,
      black: 900,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  corePlugins: {
    fontSmoothing: true,
  },
};
