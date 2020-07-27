const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {

  it("should return true", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it("should return false", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });
  it("should return true", () => {
    assert.isTrue(eqArrays([[2, 3], 4], [[2, 3], 4]));
  });

});
