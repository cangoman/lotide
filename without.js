const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i])
        return false;
    }
    return true;
  } else
    return false;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} === ${arr2}`);
  }
};


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



// assertArraysEqual(without(["1", 2, 3], [1, 2, 3]), ["1"]);
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

const arr = ['camilo', 'lighthouse', 'labs', 'boom'];


assertArraysEqual(arr, without(arr, ['boom']) );