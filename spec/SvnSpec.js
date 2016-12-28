import svn from '../src/svn'

describe("svn", () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 2*60*1000;
    // it("正确，svn get", (done) => {
    //     const url = "https://dev.bokesoft.com:9443/svn/mUI/branches/projects/zijiang";
    //     svn.get(url, 'app/www', 'zhouzy', 'zhouzy')
    //         .then((result) => {
    //             console.log("MESSAGE",result.data);
    //             expect(result.success).toBe(true);
    //             done();
    //         })
    //         .catch((result) => {
    //             console.log("MESSAGE",result.data.message);
    //             done();
    //         })
    // });
    it("check的路径正确", (done) => {
        const url = "https://dev.bokesoft.com:9443/svn/mUI/trunk/www";
        svn.get(url, 'app/www', 'zhouzy', 'zhouzy')
            .then((result) => {
                console.log("MESSAGE",result.data);
                expect(result.success).toBe(true);
                done();
            })
    });
    // it("地址错误，svn get", (done) => {
    //     const url = "https://dev.bokesoft.com:9443/svn/mUI/branches/projects/zij";
    //     svn.get(url, 'app/www', 'zhouzy', 'zhouzy')
    //         .catch((result) => {
    //             console.log("MESSAGE",result.data.message);
    //             expect(result.success).toBe(false);
    //             done();
    //         })
    // });
});
