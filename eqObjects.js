const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
      } else if (!Array.isArray(object1[i]) && !Array.isArray(object2[i])) {
        if (typeof object1[i] === 'object' && typeof object2[i] === 'object') {
          if (!eqObjects(object1[i], object2[i]))
            return false;
        } else {
          if (object1[i] !== object2[i])
            return false;
        }
      }
    }
    return true;
  } else
    return false;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };


// These are passing
// assertEqual(eqObjects(ab,ba), true);
// assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

// assertEqual(eqObjects(cd, dc), true); // => true
// assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 }), true); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false