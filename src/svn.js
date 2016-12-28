import SvnClient from 'svn-spawn';

function svnGet(url,dir,username,password) {
    return new Promise( (resolve, reject) => {
        const client = new SvnClient({
            cwd: dir,
            username: username,
            password: password
        });
        client.cmd(['checkout', '--quiet', url], function(err, data) {
            if(err){
                reject( {success: false, data: err} )
            }
            resolve({success: true, data: data});
        });
    });
};
let svn = {
    get: svnGet,
}
export default svn;
