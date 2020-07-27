const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([7,6]), []);
assertArraysEqual(middle([1,2,3]), [2]);
