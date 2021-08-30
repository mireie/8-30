const coinCounter = require('./work.js')

const arrayEquals = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }

  return true
}

const tests = [
  function () {
    const actual = coinCounter(0)
    const expected = [0, 0, 0, 0]

    return { 
      label: 'Test 1: returns correctly with $0.00',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },

  function () {
    const actual = coinCounter(2)
    const expected = [8, 0, 0, 0]

    return { 
      label: 'Test 2: returns correctly with $2.00 (only quarters back)',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },

  function () {
    const actual = coinCounter(0.2)
    const expected = [0, 2, 0, 0]

    return { 
      label: 'Test 3: returns correctly with $0.20 (only dimes back)',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },

  function () {
    const actual = coinCounter(0.05)
    const expected = [0, 0, 1, 0]

    return { 
      label: 'Test 4: returns correctly with $0.05 (only nickels back)',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },

  function () {
    const actual = coinCounter(0.04)
    const expected = [0, 0, 0, 4]

    return { 
      label: 'Test 5: returns correctly with $0.04 (only pennies back)',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },

  function () {
    const actual = coinCounter(0.35)
    const expected = [1, 1, 0, 0]

    return { 
      label: 'Test 6: returns correctly with $0.35 (quarter and dime)',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },

  function () {
    const actual = coinCounter(0.40)
    const expected = [1, 1, 1, 0]

    return { 
      label: 'Test 7: returns correctly with $0.40 (quarter and dime and nickel)',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },

  function () {
    const actual = coinCounter(0.44)
    const expected = [1, 1, 1, 4]

    return { 
      label: 'Test 7: returns correctly with $0.44 (all coins)',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },

  function () {
    const actual = coinCounter(4.99)
    const expected = [19, 2, 0, 4]

    return { 
      label: 'Test 8: returns correctly with $4.99 (mix of coins)',
      actual, 
      expected,
      matches: arrayEquals(actual, expected),
    }
  },
]

tests.forEach(test => {
  const { label, actual, expected, matches } = test()

  if (matches) {
    console.log('\x1b[32m%s\x1b[0m', label)
  } else {
    console.log('\x1b[31m%s\x1b[0m', label)
    console.log('expected:', expected)
    console.log('actual:  ', actual)
  }
})