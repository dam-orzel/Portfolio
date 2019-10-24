module.exports = {
  assetsDir: "assets",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/style/_global.scss";
        `
      }
    }
  }
};
