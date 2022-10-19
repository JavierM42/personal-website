const { withMaterialColors } = require("tailwind-material-colors");

module.exports = withMaterialColors(
  {
    content: ["components/**/*", "pages/**/*"],
    darkMode: "class",
    plugins: [],
  },
  {
    primary: "#416900",
    purple: { hex: "#6f22f8", harmonize: false },
    green: { hex: "#006634", harmonize: false },
    red: { hex: "#ff7645", harmonize: false },
  }
);
