const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log('🐕🐕🐕 Those two arrays are equal!');
  } else {
    console.log('🐍🐍🐍 Those two arrays are not equal!');
  }
};

//Test Scenarios
// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
// console.log(assertArraysEqual([1, 2, 3], [1, 2, '3']));

//assertArraysEqual([4, 6, 9], [4, 6, 9]);

module.exports = assertArraysEqual;