module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-typescript"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ts", ".js"],
        alias: {
          "@": "./src",
        },
      },
    ],
  ],
};
