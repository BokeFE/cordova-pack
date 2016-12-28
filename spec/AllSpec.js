import create from '../src/create'
import remove from '../src/remove'
import platform from '../src/platform'

describe("platform", () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 2*60*1000;
    it("整个项目测试", (done) => {
        remove('app')
            .then( () => {
                return create('app', 'com.zzy.zj', '紫江');
            } )
            .then( () => {
                process.chdir('app');
            } )
            .then( () => {
                    return platform.platformAdd('android');
                }
            )
            .then((result) => {
                expect(result.success).toBe(true);
                done();
            })
    });
});


