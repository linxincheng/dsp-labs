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
};
