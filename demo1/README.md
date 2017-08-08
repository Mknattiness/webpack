# webpack demo1

## 什么是 webpack

- 类似于 gulp
- 专注于打包构建
  + 主要对 JavaScript 资源进行打包构建
  + 支持像写 node 一样去写前端代码
  + 支持各种主流的模块化规范
  + 你要做的是：按照模块化的方式去写代码
    * require 加载包
    * module.exports 导出接口
  + webpack 帮你去把模块化的代码构建成可以在浏览器运行的 JavaScript

### 关于版本

- http://webpack.github.io/ 1
- https://webpack.js.org/ 2

## 起步

1. 安装 webpack

```bash
$ npm i -g webpack
```

2. 新建以下目录结构

```
dist
src
  main.js
  foo.js
index.html
```

3. 在 main.js 写入以下内容

```javascript
const foo = require('./foo')
console.log(foo.foo)
foo.fn()
```

在 foo.js 中写入以下内容：

```javascript
module.exports = {
  foo: 'bar',
  fn: function () {
    console.log('fff')
  }
}
```

4. 使用 webpack 打包构建

```bash
# 指定 src/main.js 为入库，通过 webpack 打包构建到 dist/bundle.js 文件中
# 如果 bundle.js 没有，则直接创建，如果已存在，则直接覆盖
$ webpack src/main.js dist/bundle.js
```

注意：在页面中确保加载执行的是打包构建之后的 dist/bundle.js
