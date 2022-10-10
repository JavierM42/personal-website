module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "inline-react-svg",
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: {
              active: false,
            },
          },
        },
      },
    ],
  ],
};
