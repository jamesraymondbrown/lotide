const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐕🐕🐕 Assertion Passed: ' + ${actual} + ' === ' + ${expected}`);
  } else {
    console.log(`🐍🐍🐍 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const tail = function(array) {
  const newArray = JSON.parse(JSON.stringify(array));
  const tailArray = newArray.splice(1, array.length - 1);
  return tailArray;
};



console.log(tail([2, 4, 6, 9]));