var page = require('./page');

var InstancePage = Object.create(page, {

    header:     { get: function () { return browser.element('h1'); } },

    getHeaderText: { value: function() {
        return this.header.getText();
    } }
});

module.exports = InstancePage;
