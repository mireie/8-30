const romanNum = require('./roman-num.js')

const tests = [
  function () {
    const actual = romanNum(0)
    const expected = ''

    return { 
      label: 'returns correctly with 0',
      actual, 
      expected,
      matches: actual === expected,
    }
  },

  function () {
    const actual = romanNum(1)
    const expected = 'I'

    return { 
      label: 'returns correctly with 1',
      actual, 
      expected,
      matches: actual === expected,
    }
  },

  function () {
    const actual = romanNum(5)
    const expected = 'V'

    return { 
      label: 'returns correctly with 5',
      actual, 
      expected,
      matches: actual === expected,
    }
  },

  function () {
    const actual = romanNum(10)
    const expected = 'X'

    return { 
      label: 'returns correctly with 10',
      actual, 
      expected,
      matches: actual === expected,
    }
  },

  function () {
    const actual = romanNum(50)
    const expected = 'L'

    return { 
      label: 'returns correctly with 50',
      actual, 
      expected,
      matches: actual === expected,
    }
  },

  function () {
    const actual = romanNum(100)
    const expected = 'C'

    return { 
      label: 'returns correctly with 100',
      actual, 
      expected,
      matches: actual === expected,
    }
  },

  function () {
    const actual = romanNum(500)
    const expected = 'D'

    return { 
      label: 'returns correctly with 500',
      actual, 
      expected,
      matches: actual === expected,
    }
  },

  function () {
    const actual = romanNum(1000)
    const expected = 'M'

    return { 
      label: 'returns correctly with 1000',
      actual, 
      expected,
      matches: actual === expected,
    }
  },

  function () {
    const actual = romanNum(4)
    const expected = 'IV'

    return { 
      label: 'returns correctly with 4',
      actual, 
      expected,
      matches: actual === expected,
    }
  },

  function () {
    const actual = romanNum(99)
    const expected = 'XCIX'

    return { 
      label: 'returns correctly with 99',
      actual, 
      expected,
      matches: actual === expected,
    }
  },

  function () {
    const actual = romanNum(1246)
    const expected = 'MCCXLVI'

    return { 
      label: 'returns correctly with 1246',
      actual, 
      expected,
      matches: actual === expected,
    }
  },

  function () {
    const actual = romanNum(2)
    const expected = 'II'

    return { 
      label: 'returns correctly with 2',
      actual, 
      expected,
      matches: actual === expected,
    }
  },
]

tests.forEach((test, i) => {
  const { label, actual, expected, matches } = test()

  if (matches) {
    console.log('\x1b[32m%s\x1b[0m', `Test ${i} ${label}`)
  } else {
    console.log('\x1b[31m%s\x1b[0m', `Test ${i} ${label}`)
    console.log('expected:', expected)
    console.log('actual:  ', actual)
  }
})