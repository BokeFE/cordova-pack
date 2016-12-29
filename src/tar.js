import tarNode from 'tar';
import fstream from 'fstream';
import fs from 'fs';

function Pack(dirname, dest){
    return new Promise( (resolve, reject) => {
        const dirDest = fs.createWriteStream(`${dest}.tar`);
        const packer = tarNode.Pack({ noProprietary: true })
            .on('error', (err) => {　reject( {success: false, data: err} )　})
            .on('end',  (err, data) => {resolve( {success: true, data: data} )　});
        fstream.Reader({ path: dirname, type: "Directory" })
            .on('error', (err) => {　reject( {success: false, data: err} )　})
            .pipe(packer)
            .pipe(dirDest)
    });
}

const tar = {
    Pack
}

export default tar


///
