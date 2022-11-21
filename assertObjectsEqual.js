const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`🐕🐕🐕 ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🐍🐍🐍 ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;