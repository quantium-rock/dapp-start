module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              getCustomTransformers: () => ({
                before: [require("ts-transformer-keys").transformer],
              }),
            },
          },
        ],
      },
    ],
  },
};
