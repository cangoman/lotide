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
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const middle = function(array) {
  if (array.length <= 2)
    return [];
  else {
    const middle = (array.length - 1) / 2;
    return array.slice(middle, array.length % 2 === 0 ? middle + 2 : middle + 1);
  }
};

assertArraysEqual(middle([7,6]), []);

