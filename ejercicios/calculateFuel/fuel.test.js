const calculateFuel = require('./fuel')

test('Calcular combustible 15', () => {
  expect(calculateFuel(15)).toBe(150)
})

test('Calcular combustible 23', () => {
  expect(calculateFuel(23)).toBe(230)
})

test('Calcular combustible 10', () => {
  expect(calculateFuel(10)).toBe(100)
})

test('Calcular combustible 3', () => {
  expect(calculateFuel(3)).toBe(100)
})

test('Calcular combustible 23.5', () => {
  expect(calculateFuel(23.5)).toBe(235)
})

test('Calcular combustible 3.14', () => {
  expect(calculateFuel(3.14)).toBe(100)
})

test('Calcular combustible 9.99', () => {
  expect(calculateFuel(9.99999)).toBe(100)
})

test('Calcular combustible mucho', () => {
  expect(calculateFuel(822315322)).toBe(8223153220)
})

test('Calcular combustible 12345', () => {
  expect(calculateFuel(12345.6789)).toBe(123456.789)
})

test('Calcular combustible 31.41', () => {
  expect(calculateFuel(31.41)).toBe(314.1)
})
