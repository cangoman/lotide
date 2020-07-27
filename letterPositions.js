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
};

module.exports = letterPositions;
