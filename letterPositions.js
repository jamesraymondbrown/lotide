const letterPositions = function(string) {
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

//letterPositions('hello how are you doing');

// assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;