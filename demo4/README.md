# webpack demo4

> 学习目标：打包 css 等资源

安装依赖：

```bash
$ npm i -D style-loader css-loader
```

在加载 .css 文件资源的时候，在它前面加上：

```javascript
// 告诉 webpack 加载 main.css 文件资源的时候：
// 先用 css-loader 将 main.css 转换为一个模块
// 再用 style-loader 将 css 文件模块转换为一个 style 节点插入到 head 节点中
import 'style-loader!css-loader!css/main.css'
```
