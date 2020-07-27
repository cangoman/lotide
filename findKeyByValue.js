const findKeyByValue = function(obj, val) {
  
  for (let i in obj) {
    if (obj[i] === val)
      return i;
  }
  return undefined;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire",
//   documentary: "Dirty Money",
//   foreign: "Money Heist",
//   satire: "Patriot Act"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Patriot Act"), "satire");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Money Heist"), "foreign");