import create from '../src/create'
import remove from '../src/remove'
import empty from '../src/empty'
import platform from '../src/platform'
import plugin from '../src/plugin'
import svn from '../src/svn'
import build from '../src/build'

import config from '../../config/index.json'
function pack(project) {
    return new Promise( (resolve, reject) => {

        remove(project.name)
            .then( () => {
                return create(project.name, project.packageName, project.name);
            } )
            .then( () => {
                return process.chdir(project.name);
            } )
            .then( () => {
                return empty('www');
            } )
            .then( () => {
                console.log(process.cwd());
                // 下载基础代码
                //处理url
                var url = project.primaryDownloadLink;
                console.log(url);
                if( url.match(/^yigo/) ){
                    url = config.primaryDownloadLink[url];
                }
                console.log(url);
                return svn.get( url, '', project.user, project.password );
            } )
            .then( () => {
                // 下载具体项目代码
                return svn.get( project.secondaryDownloadLink, `www/js/lib`, project.user, project.password );
            } )
            .then( () => {
                // 添加platform
                return platform.add(project.platform);
            } )
            .then( () => {
                // 添加plugin
                return plugin.add(project.plugin[0]);
            } )
            .then( () => {
                // build
                return build(project.platform, false);
            } )
            .then( (data) => {
                resolve({success: true, data: data});
            } )
            .catch( (err) => {
                reject( {success: false, data: err} )
            } )

    } );

}

export default pack;
