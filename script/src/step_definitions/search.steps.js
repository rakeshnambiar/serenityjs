'use strict';
const
    loginPage = require('../pages/login.page'),
    searchResultsPage = require('../pages/search.results.page'),
    assert = require('../utils/assert').assert,
    expect = require('../utils/expect').expect;

module.exports = function searchSteps() {

    browser.waitForAngularEnabled(false);
    this.setDefaultTimeout(60 * 1000);

    this.Given(/^I am a new User$/,  async () => {
        await console.log("-------New User going to access the EPMC Application ----------------")
        await loginPage.openApp();
    });

    this.When(/^I open the europePMC Website$/, async () => {
        let page_displayed = await loginPage.signInOptionDisplayed();
        assert.isTrue(await page_displayed === true, 'FAILED: Page NOT loaded')

    });

    this.When(/^Perform an "([^"]*)" search$/, async (text) => {
        await loginPage.performSearch(text);
    });

    this.Then(/^I should be able to see all the articles matching to the Author name entered$/, async () => {
        let result_status = await searchResultsPage.IsSearchResultsAvailable();
        assert.isTrue(await result_status === true, 'FAILED: Results NOT found')
    });

};
