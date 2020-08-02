const express = require('express'); // express
const router = express.Router(); // 路由
const path = require('path'); // 路径
const fs = require('fs'); // 文件
const readLine = require('readline'); // 一行一行读取代码
const { exec } = require('child_process'); // 控制台

const formidable = require('formidable'); //文件夹上传

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

router.post("/file/:id", (req, res) => {
    var id = req.params.id;
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, "lib", id);
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (Object.keys(files).length != 0) {
            fs.renameSync(files.wenjian.path, path.join(__dirname, "lib", id, files.wenjian.name));
            res.send({
                path: files.wenjian.name
            })
        }
    })
})

module.exports = router;