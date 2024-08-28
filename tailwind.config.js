const { withMaterialColors } = require("tailwind-material-colors");

module.exports = withMaterialColors(
  {
    content: ["components/**/*", "pages/**/*"],
    darkMode: "selector",
    plugins: [],
    theme: {
      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        },
        boxShadow: {
          lg: "0 0px 15px -1px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          xl: "0 0px 25px -3px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        },
      },
    },
  },
  {
    primary: "#416900",
    purple: { hex: "#6f22f8", harmonize: false },
    green: { hex: "#006634", harmonize: false },
    red: { hex: "#ff7645", harmonize: false },
    blue: { hex: "#2972f1", harmonize: false },
  },
  {
    scheme: "tonalSpot",
  }
);
