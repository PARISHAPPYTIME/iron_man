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

router.post("/upload-file", (req, res) => {

    let form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, "lib/file");
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (Object.keys(files).length != 0) {
            fs.renameSync(files.cxyFile.path, path.join(__dirname, "lib/file", files.cxyFile.name));
            res.send({
                files: files
            })
        }
    })
})

router.get("/upload-file-all", (req, res) => {
    console.log(path.join(__dirname, "lib/file"))
    fs.readdir(path.join(__dirname, "lib/file"), function (err, files) {
        if (err) {
            console.log(err);
            return res.send("目录不存在");
        }
        let newFiles = [];
        files.forEach(item => {
            newFiles.push({
                fileName: item,
                path: path.join('/lib/file/' + item)
            });
        })
        res.send({
            files: newFiles
        })
    })
})
let basePath = path.join(__dirname, 'lib/file/');
router.get('/path/:id', (req, res)=> {
    const fileName = req.params.id;
    const filePath = path.join(basePath + fileName);
    fs.stat(filePath, (err, stats) => {
        if(err) throw err // 不存在
        // console.log(2);
        if(stats.isDirectory()){
            // 是文件
        }else{
            res.json({
                status: true,
                filePath: filePath
            });
        }
    })
})

module.exports = router;