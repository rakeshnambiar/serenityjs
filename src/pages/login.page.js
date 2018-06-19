'use strict';

const loginPage = function() {

    const po = this;

    po.Search_Input = by.id('banner--search-input');

    po.Search_Button = by.id('banner--search-button');

    po.Sign_In_Option = by.id('login-bar--signin-link');

    po.Login_Button = by.css('button[type=\'submit\']');

    po.openApp = function() {
        browser.get('/accounts/login');
        //browser.manage().window().maximize();
    };

    po.performSearch = function (keyword){
        browser.element(po.Search_Input).sendKeys(keyword.toString());
        browser.element(po.Search_Button).click();
    };

    po.signInOptionDisplayed = function () {
        return browser.element(po.Sign_In_Option).isDisplayed();
    }
};

module.exports = new loginPage();