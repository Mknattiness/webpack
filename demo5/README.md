# webpack demo5

> 学习目标：学习 webpack 的配置文件

在根目录下创建一个 `wbepack.config.js`：

```javascript
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, './dist'), // 必须是绝对路径，利用 __dirname 拼接一个动态的绝对路径
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // 当 import .css 文件资源的时候，使用 style-loader 和 css-loader 加载处理
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      { // 当加载以 /\.(png|svg|jpg|gif)$/ 结尾的后缀名的文件的时候，使用 file-loader 加载处理
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
```

## 解决 index.html 的问题

- 打包之后的资源路径问题
- 打包中的引入的文件名的问题

- 自动将 index.html 打包到 dist 目录中

1. 安装依赖：

```bash
$ npm i -D html-webpack-plugin
```

2. 在 webpack.config.js 文件中，引入 html-webpack-plugin

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
```

3. 在 webpack.config.js 文件中，进行配置

```js
module.exports = {
  entry: join('./src/main.js'), // 如果是相对路径 ./ 不能省，建议也写成动态的绝对路径
  output: {
    path: join('./dist'), // 必须是绝对路径，利用 __dirname 拼接一个动态的绝对路径
    filename: 'build.js'
  },
  plugins: [ // 表示插件的意思，一般用于对 js压缩、css压缩、html的处理等资源配置
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  ...
  ...
```
