import { cordova } from 'cordova-lib';

function create( dir, optionalId, optionalName ){
    return new Promise( (resolve, reject) => {
        cordova.create( dir, optionalId, optionalName , {}, (err, data) => {
            if (err) {
                reject({success:false,data: new Error(err)})
            }
            resolve({success: true, data: data});
        });
    });
}
export default create;
