console.log(__dirname)
var pug = require('pug'),
    fs = require('fs')
    , path = __dirname + '/iosDist.pug'
    , str = require('fs').readFileSync(path, 'utf8')
    , fn = pug.compile(str, {pretty: true });

function htmlGen(plistUrl,appName){
    return new Promise(function(resolve,reject){
        var locals = {plistUrl:plistUrl,appName:appName};
        var html = fn(locals);
        var fileName = 'index.html';
        fs.writeFile(fileName, html, (err) => {
            if (err) {
                reject(err)
            };
            resolve(`${fileName} was saved!`);
        });
    })
};
module.exports = htmlGen;

//htmlGen('https://dev.bokesoft.com/yigomobile/public/ios/1463979824000/manifest.plist','车掌柜');