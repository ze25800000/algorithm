var fs = require('fs');
var path = require('path');

var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (err, data) {
            if (err) reject(err);
            resolve(data);
        })
    })
};
var asyncReadFile = async function () {
    var f1 = await readFile(path.join(__dirname, '14.promise.html'));
    var f2 = await readFile(path.join(__dirname, '14.promise.txt'));
    console.log(f1.toString());
    console.log(f2.toString());
}
var result = asyncReadFile();