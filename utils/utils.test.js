const expect = require('chai').expect;
const utils = require('./utils');

it('should add two numbers', () => {
  expect(utils.add(1, 1)).to.equal(2);
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(1, 1, (sum) => {
    expect(sum).to.equal(2);
    done();
  });
});

it('should square a number', () => {
  expect(utils.square(2)).to.equal(4);
});