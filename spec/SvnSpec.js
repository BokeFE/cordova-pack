import svn from '../src/svn'

describe("svn", () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 2*60*1000;
    it("svn get", (done) => {
        const url = "https://dev.bokesoft.com:9443/svn/mUI/branches/projects/zijiang";
        svn.get(url, 'app/www', 'zhouzy', 'zhouzy')
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
