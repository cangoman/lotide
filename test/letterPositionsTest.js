const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  const result1 = letterPositions("hello camilo");

  it("should return [4, 11] as positions of 'o' in for 'hello camilo'", () => {
    assert.deepEqual(result1['o'], [4, 11]);
  });

  it("should return [2, 3, 10] as positions of 'l' in 'hello camilo'", () => {
    assert.deepEqual(result1['l'], [2, 3, 10]);
  });

});
