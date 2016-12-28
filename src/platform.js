import {cordova} from 'cordova-lib';

function add(platform){
    console.log(platform);
    return new Promise(function (resolve, reject) {
        cordova.platform('add', platform, {'verbose': true},function (err, data) {
            if (err) {
                console.log(err);
                reject( {success: false, data: err} )
            }
            resolve({success: true, data: data});
        });
    });
}

let platform = {
    add,
}
export default platform;
