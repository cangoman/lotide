const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  str = str.toLowerCase();
  const result = {};

  for (const char of str) {
    if (char === " ") continue;
    if (result[char])
      result[char]++;
    else 
      result[char] = 1;
  }
  return result;
}

result1 = countLetters("CamiloAndresGomezBonilla");

assertEqual(result1["a"], 3);
assertEqual(result1["b"], 1);
assertEqual(result1["o"], 3);