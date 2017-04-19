# vue2.0模板

> 针对vue2.0使用，支持多页面生成，支持配置不同环境Build,根据环境.env.js暴露不同公用变量

在vue-cli webpack模板上进行修改。

## Build Setup

``` bash
# 安装依赖
npm install

# 开启端口进行调试 port 可以是10000~65535之间的数字
npm run dev port

# dllPlugin打包
npm run dll

# 测试环境编译
npm run build test

# 生产环境编译
npm run build prod
```

## 配置修改
### 1.config/dev.js  
npm run dev 调试配置，单个页面进行调试

```
tmpl  //模板原始路径
//调试入口文件，只包括一个页面内容
entry: {
  index: './src/main.js',
},
proxyTable //跨域配置

```

### 2.config/index.js
npm run build 打包配置，支持多页面打包

```
build: {
  //入口文件
  entry: {
    index: './src/main.js',
    secondIndex: '...'
  },
  html: [{
    filename: 'index.html', //模板输出名称
    entrys: ['index'], //页面需要引用的入口文件
    title: '页面1', //html中的title 
    tmplPath: './src/index.ejs' //模板原始路径，默认：'./src/index.ejs'
  }, {
    filename: 'secondPage.html',
    entrys: ['secondIndex'], 
    title: '页面2',
    tmplPath: './src/index.ejs'
  }],
  htmlOutputPath: '../public/', //模板输出路径
  assetsRoot: path.resolve(__dirname, '../public/static/'), //静态资源输出根路径
  assetsSubDirectory: '',
  publicPath: './static/', //和正常的PublicPath相同
  assetsPublicPath: '../', //css内部图片等资源的公有路径
  ...
},
```

## 不同环境区分
在config.*.env.js中进行不同环境配置

```
NODE_ENV //环境
isUglyfy //是否压缩代码
其他 //暴露全局变量，如接口等,可自行配置
```

全局变量通过 ENV_OPT 进行访问，如

```
ENV_OPT.baseApi;
```

## dllPlugin
利用 DllPlugin 和 DllReferencePlugin 预编译资源模块,避免重复打包等问题
使用 [add-asset-html-webpack-plugin](https://github.com/SimenB/add-asset-html-webpack-plugin) 自动引入页面

### 配置
config/lib.dependencies.js

根据需求自行添加，已默认加入vue全家桶。



