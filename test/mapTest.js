const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  
  
  it("should return [6, 7,2,5,3] for x => x.length", () => {
    const results1 = map(words, word => word.length);
    assert.deepEqual(results1, [6, 7,2,5,3]);
  });

  it("should return [0, 1, 0, 1, 1] for x => x.length % 2", () => {
    const results1 = map(words, word => word.length % 2);
    assert.deepEqual(results1, [0, 1, 0, 1, 1]);
  });

});
