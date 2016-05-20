var pug = require('pug'),
    fs = require('fs')
    , path = __dirname + '/iosDist.pug'
    , str = require('fs').readFileSync(path, 'utf8')
    , fn = pug.compile(str, {pretty: true });
var locals = {iosUrl:'http://zhouzhogyuan.com/a.plist'};
var html = fn(locals);
console.log(html);
function htmlGen(){
    return new Promise(function(resolve,reject){
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
//htmlGen().then(
//    function(d){console.log(d)},
//    function(e){console.log(e)}
//    )
//    .catch(function (error) {
//            console.error(error);
//        }
//    );;