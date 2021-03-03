module.exports = {
  css: {
      loaderOptions: {
        css: {},
        postcss: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 37.5 //设计图给的375的图就写37.5，也就是1rem=37.5px
            })
          ]
        }
      }
  },
}
