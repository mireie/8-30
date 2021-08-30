const primeSifting = require('./prime-sifting.js')

const arrayEquals = (arr1 = [], arr2 = []) => {
  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }

  return true
}

const tests = [
  function () {
    const actual = primeSifting(0)
    const expected = []

    return { 
      label: 'returns empty list for 0',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },

  function () {
    const actual = primeSifting(1)
    const expected = []

    return { 
      label: 'returns empty list for 1',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },

  function () {
    const actual = primeSifting(5)
    const expected = [2, 3, 5]

    return { 
      label: 'returns correct primes up to 5 (inclusive)',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },

  function () {
    const actual = primeSifting(10)
    const expected = [2, 3, 5, 7]

    return { 
      label: 'returns correct primes up to 10 (inclusive)',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },

  function () {
    const actual = primeSifting(20)
    const expected = [2, 3, 5, 7, 11, 13, 17, 19]

    return { 
      label: 'returns correct primes up to 20 (inclusive)',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },

  function () {
    const actual = primeSifting(100)
    const expected = [
      2, 3, 5, 7, 11, 13, 17, 19, 23,
      29, 31, 37, 41, 43, 47, 53, 59,
      61, 67, 71, 73, 79, 83, 89, 97,
    ]

    return { 
      label: 'returns correct primes up to 100 (inclusive)',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },

  function () {
    const actual = primeSifting(1000)
    const expected = [
      2, 3, 5, 7, 11, 13, 17, 19, 23,
      29, 31, 37, 41, 43, 47, 53, 59,
      61, 67, 71, 73, 79, 83, 89, 97,
      101, 103, 107, 109, 113, 127, 131, 
      137, 139, 149, 151, 157, 163, 167, 173,
      179, 181, 191, 193, 197, 199, 211, 223,
      227, 229, 233, 239, 241, 251, 257, 263,
      269, 271, 277, 281, 283, 293, 307, 311,
      313, 317, 331, 337, 347, 349, 353, 359,
      367, 373, 379, 383, 389, 397, 401, 409,
      419, 421, 431, 433, 439, 443, 449, 457,
      461, 463, 467, 479, 487, 491, 499, 503,
      509, 521, 523, 541, 547, 557, 563, 569,
      571, 577, 587, 593, 599, 601, 607, 613,
      617, 619, 631, 641, 643, 647, 653, 659,
      661, 673, 677, 683, 691, 701, 709, 719,
      727, 733, 739, 743, 751, 757, 761, 769,
      773, 787, 797, 809, 811, 821, 823, 827,
      829, 839, 853, 857, 859, 863, 877, 881,
      883, 887, 907, 911, 919, 929, 937, 941,
      947, 953, 967, 971, 977, 983, 991, 997,
    ]

    return { 
      label: 'returns correct primes up to 1000 (inclusive)',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },
]

const main = () => {
  const args = process.argv.slice(2)

  const start = parseInt(args[0] || 0)
  const end = parseInt(args[1] || tests.length - 1) + 1

  tests.slice(start, end).forEach((test, i) => {
    const { label, actual, expected, matches } = test()
  
    if (matches) {
      console.log('\x1b[32m%s\x1b[0m', `Test ${i} ${label}`)
    } else {
      console.log('\x1b[31m%s\x1b[0m', `Test ${i} ${label}`)
      console.log('expected:', expected)
      console.log('actual:  ', actual)
    }
  })
}

main()
