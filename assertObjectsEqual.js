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

const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length === Object.keys(object2).length) {
    //if they have the same number of keys, we then check each one
    for (let i in object1) {
      //check if the value is an array or not
      if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
        if (!eqArrays(object1[i], object2[i]))
          return false;
      } else {
        if (object1[i] !== object2[i])
          return false;
      }
    }
    return true;
  } else
    return false;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected))
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}

assertObjectsEqual( {a: "1", b: [2]}, {a: "1", b: [1,2]} );