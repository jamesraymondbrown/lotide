const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

//console.log(tail([2, 4, 6, 9]));

assertArraysEqual(tail([2, 4, 6, 9]), [4, 6, 9]);