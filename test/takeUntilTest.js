const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("should return [11] for x => x < 0", () => {
    const data1 = [11, -11, 5, 7, -1,2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [11]);
  });

  it('should return [I\'ve","been", "to", "Hollywood"] for x => x ===",', () => {
    const data2 = ["I've","been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(results2, ["I've","been", "to", "Hollywood"]);
  });

});

