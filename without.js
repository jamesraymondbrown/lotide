const without = function(source, valuesToRemove) {
  const arrayWithout = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      arrayWithout.push(item);
    }
  }
  return arrayWithout;
}

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2) === true) {
//     console.log('🐕🐕🐕 Those two arrays are equal!');
//   } else {
//     console.log('🐍🐍🐍 Those two arrays are not equal!');
//   }
// }

// const eqArrays = function(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// console.log(without(words, ["lighthouse"]));

// console.log(without([1, 2, 3], [2]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

module.exports = without;