let assert = require('chai').assert;
let HomePage = require('../../src/pageobjects/home.page');
let Page = require('../../src/pageobjects/instance.page');


describe('Suite 1 => Header Text', function () {

    it('Furniture', function () {
        HomePage.open();
        HomePage.clickOnFurnitureMenuItem();
        assert.equal(Page.getHeaderText(), "Furniture", "Correct header text:");
    });

    it('Jewelry', function () {
        HomePage.open();
        HomePage.clickOnJewelaryAndWatchesMenuItem();
        assert.equal(Page.getHeaderText(), "Jewelry & Watches", "Correct header text:");
    });

    it('Fine Art', function () {
        HomePage.open();
        FineartPage = HomePage.clickOnFineArtMenuItem();
        assert.equal(Page.getHeaderText(), "Fine Art", "Correct header text:");
    });

    it('Fashion', function () {
        HomePage.open();
        FashionPage = HomePage.clickOnFashionMenuItem();
        assert.equal(Page.getHeaderText(), "Fashion", "Correct header text:");
    });


});
