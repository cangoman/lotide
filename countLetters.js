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
};

module.exports = countLetters;