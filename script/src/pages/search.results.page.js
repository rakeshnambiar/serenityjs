'use strict';

const searchResultsPage = function() {

    const po = this;

    po.Results_Item = by.css('div.search-result');
    po.Results_Header = by.css('h1.results-header');

    /**
     * @return {boolean}
     */
    po.IsSearchResultsAvailable = async () => {
        await browser.driver.sleep(2000);
        if (await browser.element(po.Results_Header).isPresent()) {
            let results = await browser.element.all(po.Results_Item).getSize();
            return results.length > 0;
        } else{
            return false;
        }
    };
};

module.exports = new searchResultsPage();