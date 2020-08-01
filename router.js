const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const readLine = require('readline');
const { exec } = require('child_process');

// 测试接口
router.get("/test", (req, res) => {
    res.json({
        status: 200,
        msg: "接口测试"
    })
})

// 读取代码片段
router.get('/code/:id', (req, res) => {
    // 动态获取需要读取的文件的路径
    let filePathUrl = path.join(__dirname, 'public/js', req.params.id + ".js");
    const rl = readLine.createInterface({
        input: fs.createReadStream(filePathUrl)
    })
    let arr = [];
    rl.on('line', function (line) { //事件监听
        arr.push(line);
    })

    rl.on('close', function () {
        res.json({
            status: 200,
            data: arr
        })
    });
})

// 打开 vue ui 的创建窗口
router.get('/open_cmd/:id', (req, res) => {
    var cmd = req.params.id;
    if (cmd == 'node --version' || cmd == 'vue ui') {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            return res.json({
                status: 200,
                data: {
                    version: stdout.trim()
                }
            })
        });
        if (cmd == 'vue ui') {
            res.json({
                status: 200,
                data: "执行 vue ui"
            });
        }
    }
})

module.exports = router;