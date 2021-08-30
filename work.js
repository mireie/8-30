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