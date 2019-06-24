'use strict';

const loginPage = function() {

    const po = this;

    po.Search_Input = by.id('banner--search-input');

    po.Search_Button = by.id('banner--search-button');

    po.Sign_In_Option = by.id('login-bar--signin-link');

    po.Login_Button = by.css('button[type=\'submit\']');

    po.openApp = async() => {
        await browser.get('/accounts/login');
        await browser.manage().window().maximize();
    };

    po.performSearch = async (keyword) => {
        await browser.element(po.Search_Input).clear();
        await browser.sleep(500);
        await browser.element(po.Search_Input).sendKeys(keyword.toString());
        await browser.element(po.Search_Button).click();
    };

    po.signInOptionDisplayed = async () => {
        return await browser.element(po.Sign_In_Option).isDisplayed();
    }
};

module.exports = new loginPage();