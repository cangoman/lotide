const without = function(source, itemsToRemove) {
  const newArray = [];
  //loop through the original array
  for (const element of source) {
    newArray.push(element);
    //compare each element of array w each el. to remove
    for (const item of itemsToRemove) {
      if (element === item) {
        newArray.pop();
        break;
      }
    }
  }
  return newArray;
};

module.exports = without;

// assertArraysEqual(without(["1", 2, 3], [1, 2, 3]), ["1"]);
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

// const arr = ['camilo', 'lighthouse', 'labs', 'boom'];


// assertArraysEqual(arr, without(arr, ['boom']) );