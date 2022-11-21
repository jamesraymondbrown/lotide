const findKeyByValue = function(objectToCheck, value) {
  for (const key in objectToCheck) {
    if (objectToCheck[key] === value) {
      return key;
    }
  }
};

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

module.exports = findKeyByValue;