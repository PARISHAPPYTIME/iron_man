// 缩略图
var fs = require("fs");
var gm = require("gm");
const path = require('path');

gm('../lib/file/01.jpg')
    .resize(50, 50, "!")
    .write('../lib/thumbnail-file/01.jpg', function (err) {
        if (err) {
            console.log(err);
        }
    });