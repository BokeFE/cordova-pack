import {cordova} from 'cordova-lib';

function add(plugin){
    return new Promise( (resolve, reject) => {
        cordova.plugin('add', plugin.name, plugin.variable, {'verbose': true}, (err, data) => {
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
