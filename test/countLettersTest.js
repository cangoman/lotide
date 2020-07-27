const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  result1 = countLetters("CamiloAndresGomezBonilla");

  it("should return 3 a's for 'CamiloAndresGomezBonilla'", () => {
    assert.strictEqual(result1["a"], 3);
  });

  it("should return 1 b for 'CamiloAndresGomezBonilla'", () => {
    assert.strictEqual(result1["b"], 1);
  });

  it("should return 2 n's for 'CamiloAndresGomezBonilla'", () => {
    assert.strictEqual(result1["n"], 2);
  });

});