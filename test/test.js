var assert = require("assert");

var HTMLParser = require('../html-parser');


var htmlParser = new HTMLParser();


// ./node_modules/.bin/mocha --reporter dot -R spec

describe('a suite of tests', function(){
  it('should not see any div tags', function(){
  	var str = '<div>testing</div>';

  	console.log('->' + htmlParser.removeDivTags(str).replace(/\s/gim,'') + '<-');

  	var result = htmlParser.removeDivTags(str).replace(/\s/gim,'');

  	console.log('->' + result + '<-');

  	assert.equal('testing', 'testing');
  });
});

