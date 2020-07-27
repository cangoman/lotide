const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;


