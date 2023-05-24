const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
  publicPath: "",
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    resolve: {
      fallback: {
        fs: false,
        os: false,
        crypto: false,
      },
    },
    stats: { warnings: false },
  },
  chainWebpack: (config) => {
    config.plugins.delete("friendly-errors");
    config.resolve.alias.set(
      "@web3auth/web3auth",
      "@web3auth/web3auth/dist/web3auth.umd.min.js"
    );
  },
});
