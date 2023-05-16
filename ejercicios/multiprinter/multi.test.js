const multi = require('./multi')

let cartridge01 = {
  cyan: 5,
  magenta: 3,
  yellow: 7
}

let cartridge02 = {
  cyan: 5,
  magenta: 2,
  yellow: 3
}

const page01 = {
  cyan: 2,
  magenta: 0,
  yellow: 1
}

const page02 = {
  cyan: 0,
  magenta: 2,
  yellow: 0
}

const page03 = {
  cyan: 5,
  magenta: 2,
  yellow: 3
}

beforeEach(() => {
  cartridge01 = {
    cyan: 5,
    magenta: 3,
    yellow: 7
  }

  cartridge02 = {
    cyan: 5,
    magenta: 2,
    yellow: 3
  }
});

test('Prueba de impresión 01', () => {
  expect(multi(cartridge01, [
    page01,
    page02]
  )).toBe(2)
})

test('Prueba de impresión 02', () => {
  expect(multi(cartridge01, [
    page01,
    page02,
    page03
  ]
  )).toBe(-1)
})

test('Prueba de impresión 03', () => {
  expect(multi(cartridge01, [
    page01
  ]
  )).toBe(1)

  expect(multi(cartridge01, [
    page01
  ]
  )).toBe(1)

  expect(multi(cartridge01, [
    page01
  ]
  )).toBe(-1)
})

test('Prueba de impresión 04', () => {
  expect(multi(cartridge01, [
    page01,
    page02
  ]
  )).toBe(2)

  expect(multi(cartridge01, [
    page03
  ]
  )).toBe(-1)

  expect(multi(cartridge02, [
    page03
  ]
  )).toBe(1)
})
