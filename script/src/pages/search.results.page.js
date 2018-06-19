'use strict';

const searchResultsPage = function() {

    const po = this;

    po.Results_Item = by.css('div[class="results_list"] > div, div[class="results_list result_list_item_grey"] > div');

    po.IsSearchResultsAvailable = function () {
        return browser.element(po.Results_Item).isDisplayed();
    };
};

module.exports = new searchResultsPage();