const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    documentary: "Dirty Money",
    foreign: "Money Heist",
    satire: "Patriot Act"
  };
  
  it("should return 'drama' for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue((findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")));
  });

  it("should return 'undefined' for 'That 70's Show'", () => {
    assert.isUndefined(findKeyByValue(findKeyByValue(bestTVShowsByGenre, "The Wire")));
  });

  it("should return 'satire' for 'Patriot Act'", () => {
    assert.strictEqual(findKeyByValue((findKeyByValue(bestTVShowsByGenre, "Patriot Act"), "satire")));
  });

  it("should return 'foreign' for 'Money Heist'", () => {
    assert.strictEqual(findKeyByValue((findKeyByValue(bestTVShowsByGenre, "Money Heist"), "foreign")));
  });

});

