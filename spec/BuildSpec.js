import build from '../src/build'

describe("build", () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 2*60*1000;
    it("生成安装包", (done) => {
        process.chdir('app');
        build('android', false)
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


