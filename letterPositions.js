// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2) === true) {
//     console.log('🐕🐕🐕 Those two arrays are equal!');
//   } else {
//     console.log('🐍🐍🐍 Those two arrays are not equal!');
//   }
// };

// const eqArrays = function(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const letterPositions = function(sentence) {
  const results = {};
  // for (const item of sentence) {
  //   console.log(sentence.indexOf([item]))
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  console.log(results);
  return results;
};

// letterPositions('hello how are you doing');

// assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;