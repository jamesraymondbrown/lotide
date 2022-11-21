const args = process.argv;

const reverse = function (args) {
  let reversedChars = [];
  let newArray = args.slice(2);
    for (let i = 0; i < newArray.length; i++) {
      let splitted = newArray[i];
      let reversedString = '';
      //console.log(splitted);
        for (let j = splitted.length - 1; j >= 0; j--) {
         reversedString += splitted[j];
        }
        reversedChars.push(reversedString);
    }
  for (let k = 0; k < reversedChars.length; k++) {
    console.log(reversedChars[k]);
  }
}

// console.log(reverser(process.argv));

//console.log(args.slice(2, 10));

//console.log(yourFunction(process.argv[2]));

//for (var j = args[i].length - 1; j >= 0; j--) {
//  newString += args[i];
//}

module.exports = reverse; 
