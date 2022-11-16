const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐕🐕🐕 Assertion Passed: ' + ${actual} + ' === ' + ${expected}`);
  } else {
    console.log(`🐍🐍🐍 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function(string) {
  let results = {};
  for (const item of string) {
    if (item !== " ") {
      if (results[item]) {
        results[item] += 1
      } else {
        results[item] = 1
      }
    }
  }
  console.log(results);
  return results
}

countLetters("lighthouse in the house")