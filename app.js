const fs = require('fs');

fs.stat('./app.txt',(err,stats)=>{
    if(err) throw err;      // 可以利用此处判断文件是否存在，不存在会报err。
    // console.log(stats.isDirectory())//判断是否为文件夹
    console.log(stats) //打印文件相关信息
    console.log(stats.isFile())//判断是否为文件
    console.log(stats.isDirectory())
})