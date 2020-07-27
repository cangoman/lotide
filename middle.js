const middle = function(array) {
  if (array.length <= 2)
    return [];
  else {
    const middle = (array.length - 1) / 2;
    return array.slice(middle, array.length % 2 === 0 ? middle + 2 : middle + 1);
  }
};

module.exports = middle;

