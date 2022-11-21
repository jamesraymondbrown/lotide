const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function(array) {
  let arrayMiddle = [];
  const middleInteger = array.length / 2;
  if (middleInteger <= 1) {
    return arrayMiddle;
  } else if (middleInteger % 1 !== 0) {
    arrayMiddle.push(array[middleInteger - 0.5]);
  } else {
    //console.log(array[middleInteger - 1.5])
    arrayMiddle.push(array[middleInteger - 1]);
    arrayMiddle.push(array[middleInteger]);
  }
  return arrayMiddle;

};


module.exports = middle;
