import plugin from '../src/plugin'

describe("plugin", () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 2*60*1000;
    it("添加plugin", (done) => {
        process.chdir('app');
        plugin.add({name:'cordova-plugin-file',variable:{}})
            .then((result) => {
                expect(result.success).toBe(true);
                done();
            })
    });
});


