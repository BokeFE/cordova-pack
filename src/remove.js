import fs from 'fs-extra';

function remove( dir){
    return new Promise( (resolve, reject) => {
        fs.remove(dir, (err, data) => {
            if (err) {
                reject( {success:false, data:new Error(err)} );
            }
            resolve({success: true, data: data});
        });
    });
}
export default remove;
