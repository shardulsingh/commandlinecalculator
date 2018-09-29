'use strict';
var expect = require('chai').expect;
var operations = require('../operators/operations.js');

describe('add', function () {
  it('should add all numbers', function () {
    
    var args = [3,4,6,32,63,7886];
    var expectedSum = 7994;

    var actualSum = operations['add'](args);

    expect(actualSum).to.be.equal(expectedSum);

  });
});

describe('diff', function () {
  it('should subtract all numbers', function () {
    
    var args = [3,4,6,32,63,7886];
    var expectedDiff = -7988;

    var actualDiff= operations['diff'](args);


    expect(actualDiff).to.be.equal(expectedDiff);

  });
});

