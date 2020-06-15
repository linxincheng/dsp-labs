module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      "/v1": {
        target: "http://127.0.0.1:12000",
        changeOrigin: true,
      },
    },
  },
};
