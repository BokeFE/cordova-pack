import {cordova} from 'cordova-lib';

function platform(platform){
    return new Promise(function (resolve, reject) {
        var platform = platform || o.appPlatform ;
        cordova.platform('add', platform,{'verbose': true},function (err, data) {
            if (err) {
                console.log(err);
                reject(new Error(err))
            }
            console.log('add platform',platform,'success');
            resolve(data);
        });
    });
}

export default platform;
