'use strict';

var chai = require('chai');
var expect = chai.expect;

module.exports = function() {
  this.World = require('../support/world');

  this.Then(/^I should get results for "([^"]*)"$/, function (term, done) {
    this.ui().checkResults(term, done);
  });

  this.Then(/^I click on "([^"]*)"$/, function (link, done) {
    this.ui().clickLink(link, done);
  });

  this.Then(/^I should get the results page for "([^"]*)"$/, function (term, done) {
    this.ui().checkHtml('header.inner h1', term, done);
  });
};
