const assert = require("chai").assert;
const without = require("../without");


describe("#without", () => {

  
  it("should return ['1']", () => {
    assert.deepEqual(without(["1", 2, 3], [1, 2, 3]), ["1"]);
  });

  it("should return false", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
});
