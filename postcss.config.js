


module.exports = {
  plugins: {
    autoprefixer: {},

    // 雪碧图的生成与css的替换
    "postcss-sprites": {

      // relativeTo: 'rule',
      // retina: true,
      filterBy: function (image) {
        // console.log(image.url)
        if (!/\/assets\/sprite-assets\/.+\.png$/.test(image.url)) {// 只允许路径含有/assets/sprite-assets的png图片
          return Promise.reject();
        } else {
          return Promise.resolve();
        }
      },

      // stylesheetPath: './src/scss/sprites/',
      spritePath: './src/assets/sprites/'
    },

    // px转rem
    "postcss-pxtorem": {
      "rootValue": 37.5, // 设计稿宽度的1/10,
      "propList": ['*'],// 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
    },

  }
}
