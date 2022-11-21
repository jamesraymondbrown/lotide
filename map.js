const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

// const words = ["ground", "control", "to", "major", "tom"];

// const words2 = ['back', 'in', 'the', 'day']

// const results1 = map(words, word => word[0]);

// const results2 = map(words2, word => word[1])


// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2) === true) {
//     console.log('🐕🐕🐕 Those two arrays are equal!');
//   } else {
//     console.log('🐍🐍🐍 Those two arrays are not equal!');
//   }
// }

// const eqArrays = function(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1.length !== array2.length) {
//       return false;
//     }
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])
// assertArraysEqual(map(words2, word => word[1]), [ 'a', 'n', 'h', 'a' ])

module.exports = map;
