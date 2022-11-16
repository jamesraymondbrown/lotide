const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐕🐕🐕 Assertion Passed: ' + ${actual} + ' === ' + ${expected}`);
  } else {
    console.log(`🐍🐍🐍 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const middle = function(array) {
  let arrayMiddle = [];
  const middleInteger = array.length / 2;
   if (middleInteger <= 1) {
     return arrayMiddle
   } else if (middleInteger % 1 !== 0) {
     arrayMiddle.push(array[middleInteger - 0.5]);
   } else {
    //console.log(array[middleInteger - 1.5])
    arrayMiddle.push(array[middleInteger - 1]);
    arrayMiddle.push(array[middleInteger]);
   }
  return arrayMiddle

}


console.log(middle(['cat', 'dog', 'llama', 4, 'porcupine']));



// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);