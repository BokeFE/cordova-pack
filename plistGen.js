var fs = require('fs');
var plist = require('plist');
var manifestJson = {
    "items": [{
        "assets": [{
            "kind": "software-package",
            "url": "https://www.zhouzhongyuan.com/yigomobile/public/ios/1463708886000/Yigo520-debug.ipa"
        }, {
            "kind": "display-image",
            "url": "https://www.zhouzhongyuan.com/image.57.jpg"
        },{
            "kind": "full-size-image",
            "url": "https://www.zhouzhongyuan.com/image.512.jpg"
        }],
        "metadata": {
            "bundle-identifier": "com.bokesoft.ceo",
            "bundle-version": "1.2.7",
            "kind": "software",
            "title": "车掌柜"
        }
    }]
};
var assets = manifestJson.items[0].assets;
var metadate = manifestJson.items[0].metadata;
function plistGen(o){
    return new Promise(function(resolve,reject){
        assets[0].url = o.url;
        metadate['bundle-identifier'] = o.appNameSpace;
        metadate['bundle-version'] = o.appVersion;
        metadate['title'] = o.appName;
        console.log(manifestJson);
        var data = plist.build(manifestJson);
        var fileName = 'manifest.plist';
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                reject(err)
            };
            resolve(`${fileName} was saved!`);
        });

    })
};
module.exports = plistGen;
//var o = {
//    url:'d',
//    appNameSpace:'d.d.d',
//    appVersion:'1.0.0',
//    appName:'Yigo2',
//};
//plistGen(o)
//    .then(
//        function(d){console.log(d)},
//        function(e){console.log(e)}
//    )
//    .catch(function (error) {
//    console.error(error);
//    }
//    );