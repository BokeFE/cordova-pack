import tar from '../src/tar'

describe("打包文件夹", () => {
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 2*60*1000;
    it("生成压缩包", (done) => {
        tar.Pack('./config', 'dest')
            .then((result) => {
                console.log(result);
                expect(result.success).toBe(true);
                done();
            })
            .catch((result) => {
                console.log(result);
                expect(result.success).toBe(false);
                done();
            })
    });
});





