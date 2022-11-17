const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐕🐕🐕 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🐍🐍🐍 Assertion Failed: ${actual} !==  ${expected}`);
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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

//console.log(eqObjects(ab, ba));

// assertEqual(eqObjects(ab, ba), false);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);