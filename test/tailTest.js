const assert = require('chai').assert;
const tail = require("../tail");


describe("#tail", () => {
  it("should return [5, 10, 20] for for [1, 5, 10, 20];", () => {
    assert.deepEqual(tail([1, 5, 10, 20]), [5, 10, 20]);
  });

  it("should return [10, 20] for [ 5, 10, 20]", () => {
    assert.deepEqual(tail([5, 10, 20]), [10, 20]);
  });

  it("should return empty array [] for an empty array []", () => {
    assert.deepEqual(tail([]), []);
  });

});






