module.exports.newArray = function(a, b, c, d) {
  array = [a, b, c, d];
  return array;
};

module.exports.firstAndLast = function(x) {
  var array = x;
  var lastItem = array.length -1;
  var newArray = [array[0], array[lastItem]];
  return newArray;
};