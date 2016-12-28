import fs from 'fs-extra';

function empty( dir){
    return new Promise( (resolve, reject) => {
        fs.emptydir(dir, (err, data) => {
            if (err) {
                reject( {success:false, data:new Error(err)} );
            }
            resolve({success: true, data: data});
        });
    });
}

export default empty;
