exports.config = {

    framework: 'custom',

    // Selenium grid
    //directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    // To get the awesome Serenity BDD reports, replace this entry:
    // frameworkPath: require.resolve('protractor-cucumber-framework'),

    // with this one:
    frameworkPath: require.resolve('serenity-js'),

    // Yes, that's all you need :-)

    // -----------------------------------------------------------------------------------------------------------------

    baseUrl: 'http://europepmc.org',

    allScriptsTimeout: 110000,

    specs: [ 'src/features/**/*.feature' ],
    cucumberOpts: {
        require:    [ 'src/**/*.js' ],
        format:     'pretty'
    },

    // capabilities: {
    //     browserName: 'chrome',
    //     chromeOptions: {
    //         args: [
    //             // 'incognito',
    //             // 'disable-extensions',
    //             // 'show-fps-counter=true'
    //         ]
    //     },

    multiCapabilities:  [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    // // }, {
    //     browserName: 'safari'
    }],

        // execute tests using 2 browsers running in parallel
        shardTestFiles: true,
        maxInstances: 1,


    restartBrowserBetweenTests: false
};
