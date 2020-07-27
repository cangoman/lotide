const findKey = function(object, callback) {
  let result;
  for (const key in object) {
    if (callback(object[key])) {
      result = key;
      return result;
    }
  }
  return result;
};

module.exports = findKey;

// const object1 = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }; // => "noma"

// assertEqual(findKey(object1, x => x.stars > 3), undefined);