module.exports = {
  pluginOptions: {
    antd: {
      importType: 'modularized',
      style: true
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  lintOnSave: false
}
