const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const words2 = ['back', 'in', 'the', 'day']

const results1 = map(words, word => word[0]);

const results2 = map(words2, word => word[1])


// assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])
// assertArraysEqual(map(words2, word => word[1]), [ 'a', 'n', 'h', 'a' ])

module.exports = map;
