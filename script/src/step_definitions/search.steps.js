'use strict';
const
    loginPage = require('../pages/login.page'),
    searchResultsPage = require('../pages/search.results.page'),
    expect = require('../expect').expect;

module.exports = function searchSteps() {

    browser.waitForAngularEnabled(false);
    this.setDefaultTimeout(60 * 1000);

    this.Given(/^I am a new User$/,  () => {
        console.log("-------New User going to access the EPMC Application ----------------")
        loginPage.openApp();
    });

    this.When(/^I open the europePMC Website$/, () => {
        expect(loginPage.signInOptionDisplayed()).to.eventually.equal(true);
    });

    this.When(/^Perform an Author name "([^"]*)" search$/, (text) => {
        loginPage.performSearch(text);
    });

    this.Then(/^I should be able to see all the articles matching to the Author name entered$/, () => {
        expect(searchResultsPage.IsSearchResultsAvailable()).to.eventually.equal(true);
    });

};
