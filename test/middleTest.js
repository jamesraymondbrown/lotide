const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle(['cat', 'dog', 'llama', 4, 'porcupine']), ['llama']);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 9, 4, 5]), [9]);