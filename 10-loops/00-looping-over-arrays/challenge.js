module.exports.sumNumbers = function(array) {
  var total = 0;
  for (var i = 0; i < array.length; ++i) {
    total += array[i];  
  }
  return total;
};

module.exports.splitAndLowerCaseString = function(inputString) {
  return inputString.toLowerCase().split(',');
};

module.exports.addIndex = function(newArray) {
  return newArray.map(function(dataElement, index) {
    return index + ' is ' + dataElement;
  })
};