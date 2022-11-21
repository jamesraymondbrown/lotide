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

module.exports = eqObjects;