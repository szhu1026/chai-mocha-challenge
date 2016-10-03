var page = require('./page');

var searchResultPage = Object.create(page, {

    searchResultHeaderText:     { get: function () { return browser.element('.results-header-search-term'); } },
    searchResultCount:          { get: function () { return browser.element('.results-header-num-results'); } },

    getSearchResultHeaderText: { value: function() {
        return this.searchResultHeaderText.getText();
    } },

    getSearchResultCount: { value: function() {
        return this.searchResultCount.getText();
    } },

    isSearchResultCountPresent: { value: function() {
        if (this.searchResultCount.isVisible()){
            return true;
        };
        return false;
    } },

});

module.exports = searchResultPage
