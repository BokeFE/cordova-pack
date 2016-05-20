console.log(__dirname)
var pug = require('pug'),
    fs = require('fs')
    , path = __dirname + '/iosDist.pug'
    , str = require('fs').readFileSync(path, 'utf8')
    , fn = pug.compile(str, {pretty: true });

function htmlGen(plistUrl){
    return new Promise(function(resolve,reject){
        var locals = {plistUrl:plistUrl};
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