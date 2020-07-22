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


const letterPositions = function(sentence) {
  sentence = sentence.toLowerCase(); // Skip this to make it case sensitive
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") continue;

    if (results[sentence[i]])
      results[sentence[i]].push(i);
    else 
    results[sentence[i]] = [i];
  }
  
  return results;
}


const result1 = letterPositions("hello camilo");

assertArraysEqual(result1['o'], [4, 11]);
assertArraysEqual(result1['l'], [2, 3, 10]);
