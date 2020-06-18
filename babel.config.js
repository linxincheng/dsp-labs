module.exports = {
  presets: [
    [
      "env",
      {
        modules: false,
        targets: {
          browsers: ["> 1%", "last 2 versions", "not ie <= 8"],
        },
      },
    ],
    "@vue/cli-plugin-babel/preset",
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
