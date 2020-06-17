const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css", "svg"];
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  publicPath: "./",
  outputDir: "./server/app/view",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/v1": {
        target: "http://127.0.0.1:12000",
        changeOrigin: true,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
  configureWebpack: (config) => {
    if (isProduction) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8,
        })
      );
    }
  },
};
