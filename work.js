module.exports = coinCounter

function coinCounter(
  amount,
  coinArray = [0, 0, 0, 0],
  coinArrayIndex = 0,
) {
  if (amount === 0) {
    return coinArray;
  }
  const cents = amount * 100
  const coinValues = [25, 10, 5, 1]
  coinArray[coinArrayIndex] = Math.floor(cents / coinValues[coinArrayIndex]);
  const updatedAmount = (cents - (coinArray[coinArrayIndex] * coinValues[coinArrayIndex])) / 100;
  return coinCounter(updatedAmount, coinArray, ++coinArrayIndex);
  }

// function coinCounter (amount) {
//   const coinValues = [25, 10, 5, 1]
//   let cents = amount * 100
  
//   return coinValues.map(value => {
//     const coinCount = Math.floor(cents / value)
//     cents = cents - (coinCount * value)
//     return coinCount
//   })
// }

  // let coinArray = [0, 0, 0, 0]; // [quarters, dimes, nickles, pennies]
  // let cents = amount * 100;

  // function getQuarters(cents) {
  //   return Math.floor(cents / 25);
  // }
  // function getDimes(cents) {
  //   return Math.floor(cents / 10);
  // }
  // function getNickles(cents) {
  //   return Math.floor(cents / 5);
  // }
  // function getPennies(cents) {
  //   return Math.floor(cents / 1);
  // }

  // const updatedAmount = amount - getQuarters(amount)

  // if (coinArrayIndex === 0) {
  //   return coinCounter(
  //     amount - getQuarters(amount),
  //     [getQuarters(amount), 0, 0, 0],
  //     coinArrayIndex + 1,
  //   )
  // }


  // coinArray[0] = getQuarters(cents);
  // cents = cents - getQuarters(cents) * 25;

  // coinArray[1] = getDimes(cents);
  // cents = cents - getDimes(cents) * 10;

  // coinArray[2] = getNickles(cents);
  // cents = cents - getNickles(cents) * 5;

  // coinArray[3] = getPennies(cents);

  // return coinArray;
// }

/*
// coinArray = [nil, nil, nil, nil]

// if (coinArray[0] === nil) {
  coinArray[0] = getQuarters(cents);
} else if (coinArray[1] === nil) {
  coinArray[1] = getDimes(cents-coinArray[0]*25)
}

*/
