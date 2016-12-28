import SvnClient from 'svn-spawn';

function svnGet(url,dir,username,password) {
    console.log(url,dir,username,password);
    return new Promise( (resolve, reject) => {
        const client = new SvnClient({
            cwd: dir,
            username: username,
            password: password
        });
        client.checkout(url, (err, data) => {
            if(err){
                console.log('ERROR',err);
                reject( {success: false, data: new Error(err)} )
            }
            console.log('SUCCESS',data);
            resolve({success: true, data: data});
        });
    });
};
let svn = {
    get: svnGet,
}
export default svn;
