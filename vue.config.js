module.exports = {
  devServer: {
    proxy: {
      "^/": {
        target:
          "https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22"
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
