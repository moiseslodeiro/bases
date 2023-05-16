const Name = require('./name')

const n1 = new Name('john', 'DOE')
const n2 = new Name('sARah', 'fRolliE')

test('Test Name John', () => {
  expect(n1.fname).toBe('John')
  expect(n1.lname).toBe('Doe')
  expect(n1.fullname).toBe('John Doe')
  expect(n1.initials).toBe('J.D')
})

test('Test Name Sarah', () => {
  expect(n2.fname).toBe('Sarah')
  expect(n2.lname).toBe('Frollie')
  expect(n2.fullname).toBe('Sarah Frollie')
  expect(n2.initials).toBe('S.F')
})
