module.exports = {
  plugins: [
    ["@babel/plugin-transform-typescript", { isTSX: true }],
    "@babel/plugin-transform-react-jsx",
  ],
  presets: ["@babel/env"],
};
