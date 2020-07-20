const tail = function(array) {
  return array.slice(1);
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const numbers = [1, 5, 10, 20];
const num_tail = tail(numbers);
console.log( assertEqual(1, num_tail[0]) );