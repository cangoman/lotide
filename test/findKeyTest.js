const findKey = require('../findKey');
const assert = require('chai').assert;

describe('#findKey', () => {
  const object1 = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 1 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it('should return "Blue Hill" for x === 1', () => {
    assert.strictEqual(findKey(object1, x => x.stars === 1), 'Blue Hill');
  });

  it('should return "noma" for x > 1', () => {
    assert.strictEqual(findKey(object1, x => x.stars > 1), 'noma');
  });

  it('should return "elBulli" for x > 2', () => {
    assert.strictEqual(findKey(object1, x => x.stars > 2), 'elBulli');
  });

});