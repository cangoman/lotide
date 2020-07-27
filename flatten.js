const flatten = function(array) {
  let flatArray = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(flatten(element));
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};

module.exports = flatten;


// assertArraysEqual(flatten([1, 2, [3, [4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);

//console.log(flatten([1, 2, [3, 4], 5, [6]]));