const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item))
      break;
    else
      results.push(item);
  }
  return results;
};

module.exports = takeUntil;

// const data1 = [-11, 2, 5, 7, -1,2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, []);

// console.log('---');

// const data2 = ["I've", ',',"been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');


// assertArraysEqual(results2, ["I've"]);
