exports.config = {

    framework: 'custom',

    // Selenium grid
    directConnect: false,
    seleniumAddress: 'http://zalenium:4444/wd/hub',

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
        format:     'pretty',
        tags:       ['@RegressionTest']
    },

    // To execute in single browser

    //capabilities: {
      //'browserName': 'firefox',
       //'moz:firefoxOptions': {
          //'args': ['--headless','--shm-size=2g']
      // }
    //},

    // To execute the Tests in parallel on multiple-browser
    multiCapabilities:  [
/*        {
        browserName: 'firefox',
        'moz:firefoxOptions': {
            'args': ['--headless']
        }
     },*/ {
        browserName: 'chrome'
    }],
    // execute tests using 2 browsers running in parallel
    shardTestFiles: true,
    maxInstances: 1,


    restartBrowserBetweenTests: false
};
