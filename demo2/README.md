# webpack demo2

## 解决团队成员之间版本差异问题

```bash
$ npm init -y
$ npm i -D webpack
```

然后在 package.json 文件中加入：

```json
"scripts": {
  "build": "webpack src/main.js dist/bundle.js"
},
```

打包构建：

```bash
$ npm run build
```
