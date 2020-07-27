const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => { 
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result1 = countOnly(firstNames, { "Jason": false, "Karima": true, "Fang": true });
  
  it("should return undefined 'Jason'", () => {
    assert.isUndefined(result1["Jason"]);
  });

  it("should return undefined for 'Karima'", () => {
    assert.isUndefined(result1["Karima"]);
  });

  it("should return 2 for 'Fang'", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

});
