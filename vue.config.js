const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    proxy: 'http://jsonplaceholder.typicode.com/todos',
  }
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/{ToDoListByVue3}/'
    : '/'
}