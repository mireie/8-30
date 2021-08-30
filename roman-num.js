function romanNum(
  number,
  romanSym = "",
  valIndex = 12
) {
  if (number === 0) {
    return romanSym;
  }

  const symbols = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  const values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

  if (number >= values[valIndex]) {
    romanSym += symbols[valIndex]
    const updatedNumber = number - values[valIndex]
    return romanNum(updatedNumber, romanSym, valIndex)
  } else {
    return romanNum(number, romanSym, --valIndex)
  }
}


// function romanNum(number) {
//   const symbols = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
//   const values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
//   let output = "";

//   for (let i=12; i >= 0; i--) {
//     while (number >= values[i]) {
//         output += symbols[i];
//         number -= values[i]; 
//     }
//   }
//   return output;
// }

module.exports = romanNum