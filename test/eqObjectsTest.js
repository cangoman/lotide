const eqObjects = require('../eqObjects');
const assert = require('chai').assert;


describe("#eqObjects", () => {

  
  it("should return true", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it("should return false", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });

});



