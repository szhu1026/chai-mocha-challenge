var assert = require('chai').assert;
var HomePage = require('../../src/pageobjects/home.page');
var SearchresultsPage = require('../../src/pageobjects/searchresults.page');


var searchTexts = ['Oak Wood Table', 'Cat Painting', 'Gold Engagement Ring', 'Chanel Handbag'];

searchTexts.forEach(function (searchText) {
    describe('Suite 2 => Search page', function () {
        it('should display results with total count.', function () {
            HomePage.open();
            HomePage.searchForItem(searchText);

            assert.equal(SearchresultsPage.getSearchResultHeaderText(), '\"' + searchText.toLowerCase() + '\"', "Correct header text.");
            assert.isTrue(SearchresultsPage.isSearchResultCountPresent(), "Correct search count.");

        })
    });
});
