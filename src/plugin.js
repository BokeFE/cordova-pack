import {cordova} from 'cordova-lib';

function add(plugin){
    return new Promise(function (resolve, reject) {
        cordova.plugin('add', plugin.name, plugin.variable, {'verbose': true},function (err, data) {
            if (err) {
                console.log(err);
                reject( {success: false, data: err} )
            }
            resolve({success: true, data: data});
        });
    });
}

let plguin = {
    add,
}
export default plguin;
