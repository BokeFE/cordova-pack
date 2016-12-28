import create from '../src/create'
import remove from '../src/remove'

describe("platform", () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 2*60*1000;
    it("create should be a function", () => {
        expect(typeof create).toBe("function");
    });
    it("第一次create项目", (done) => {
        remove('app')
            .then( () => {
                return create('app', 'com.zzy.zj', '紫江');
            } )
            .then((result) => {
                expect(result.success).toBe(true);
                done();
            })
    });

    it("第二次create项目，中间有clean", (done) => {
        remove('app')
            .then( () => {
                return create('app', 'com.zzy.zj', '紫江');
            } )
            .then((result) => {
                expect(result.success).toBe(true);
                done();
            })

    });
    it("第三次create项目，中间没有clean", (done) => {
        create('app', 'com.zzy.zj', '紫江')
            .catch((result) => {
                expect(result.success).toBe(false);
                done();
            })
    });
});


