import pack from '../src/main'

describe("build", () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 2*60*1000;
    it("一键打包", (done) => {
        const project = {
            name: '紫江',
            description: '紫江是一家……',
            primaryDownloadLink: 'yigo16',
            secondaryDownloadLink: 'https://dev.bokesoft.com:9443/svn/mUI/branches/projects/zijiang',
            user: 'zhouzy',
            password: 'zhouzy',
            packageName: 'com.bokesoft.zijiang',
            plugin: [{name:"cordova-plugin-file"},{name:"cordova-plugin-geolocation"}],
            platform: 'android',
        }
        pack(project)
            .then((result) => {
                expect(result.success).toBe(true);
                done();
            })
            .catch((result) => {
                expect(result.success).toBe(false);
                done();
            })
    });
});


