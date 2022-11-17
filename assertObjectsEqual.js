const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`🐕🐕🐕 ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🐍🐍🐍 ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1.length !== array2.length) {
      return false;
    }
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) === true) {
      return eqArrays(object1[key], object2[key]);
    }
    else if (object1[key] !== object2[key]) {
       return false
    }
  } return true
};

const objectA = {
  color: "red",
  weight: 100
}

const objectB = {
  weight: 100,
  color: "red"
}

//Test Scenarios
console.log(assertObjectsEqual(objectA, objectB));
console.log(assertObjectsEqual([1, 2, 3], [1, 2, '3']));