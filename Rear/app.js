const express = require('express');
const app = express();
const router = require('./router');
const path = require('path');

// 设置公共文件可以被访问
app.use('/public', express.static(path.join(__dirname, 'public')));

// 设置跨域

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 文件读取必须使用绝对位置--首页
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 组件页面展示
app.get('/h/:id', function (req, res) {
    var pagePathUrl = req.params.id;
    res.sendFile(path.join(__dirname, 'src', pagePathUrl + '.html'));
});

// 添加一些自定义的路由
app.use(router);

// 添加 404 页面
app.get("/404", (req, res) => {
    res.sendFile(path.join(__dirname, 'src', '404.html'));
})

// 允许下载单个文件
app.get('/dl', (req, res) => {
    res.download("./app.js");
})

// 将所有未定义的页面重定向到 404
app.use(function (req, res) {
    res.redirect('/404');
})

// 设置端口
app.listen(3010, () => {
    console.log("服务已经打开 http://localhost:3010");
})