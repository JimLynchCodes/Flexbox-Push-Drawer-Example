//http://chaijs.com/
var chai = require('chai');

//https://github.com/domenic/chai-as-promised/
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {

  //var ptor = protractor.getInstance();

  this.Given(/^aa$/, function (callback) {
    // browser.get('http://localhost:9001');
    callback()
  });

  this.Then(/^ff$/, function (callback) {
    // expect(browser.getTitle()).to.eventually.equal(arg1).and.notify(callback);
    callback();
  });

  this.Then(/^gg$/, function (callback) {
  //   element.all(by.css('.nav li')).filter(function(elem, index) {
  //     return elem.getText().then(function(text) {
  //       return text === arg1;
  //     });
  //   }).then(function(filteredElements) {
  //     expect(filteredElements).to.have.length(1);
  //     callback();
  //   });
     callback();
  });

}
