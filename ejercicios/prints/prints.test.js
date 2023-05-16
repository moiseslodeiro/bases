const printer = require('./print')

test('Prueba de impresión', () => {
  //  expect(player1.getAge()).toBe('Rafa is 36')
  expect(printer({
    cyan: 23,
    magenta: 12,
    yellow: 10
  })).toBe(10)

  expect(printer({
    cyan: 432,
    magenta: 543,
    yellow: 777
  })).toBe(432)

  expect(printer({
    cyan: 700,
    magenta: 700,
    yellow: 0
  })).toBe(0)

  expect(printer({
    cyan: 70,
    magenta: 700,
    yellow: 1
  })).toBe(1)

  expect(printer({
    cyan: 6543,
    magenta: 74543,
    yellow: 2345678
  })).toBe(6543)

  expect(printer({
    cyan: 1,
    magenta: 1,
    yellow: 1
  })).toBe(1)

  expect(printer({
    cyan: 700,
    magenta: 700,
    yellow: 700
  })).toBe(700)
})
