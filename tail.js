const tail = function(array) {
  const newArray = JSON.parse(JSON.stringify(array));
  const tailArray = newArray.splice(1, array.length - 1);
  return tailArray;
};

module.exports = tail;