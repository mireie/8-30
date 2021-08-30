module.exports = primeSifting

function primeSifting(
  number,
  index = 2,
  primeArray = Array(number + 1).fill(true)
) {
  if (index > number) {
    return primeArray;
  }
  primeArray.forEach((num, i) => {
    if (i % index === 0 && i != index) {
      primeArray[i] = false;
    }

  });
  primeSifting(number, ++index, primeArray)
}








function primeSifting2(
  number,
  index = 2,
  primeSieve = Array(number + 1).fill(true),
) {
  if (index > number) {
    primeSieve[0] = false
    primeSieve[1] = false

    // const primes = []
    // for (let i = 0; i < number; i++) {
    //   if (primeSieve[i]) primes.push(i)
    // }
    // return primes

    return primeSieve.reduce((primes, isPrime, num) => {
      if (isPrime) primes.push(num)
      return primes
    }, [])
  }

  return primeSifting2(
    number,
    index + 1,
    primeSieve.map((isPrime, i) => {
      return (
        isPrime &&
        (i <= index || i % index !== 0)        
      )
    })
  )
}
