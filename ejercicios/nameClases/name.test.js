const Name = require('./name')

const a1 = new Name('john', 'SMITH')
const a2 = new Name('sARah', 'fRolliE')

test('Test Name a1-1', () => {
  expect(a1.fname()).toBe('John')
})

test('Test Name a1-2', () => {
  expect(a1.lname()).toBe('Smith')
})

test('Test Name a1-3', () => {
  expect(a1.fullname()).toBe('John Smith')
})

test('Test Name a1-4', () => {
  expect(a1.initials()).toBe('J.S')
})

test('Test Name a2-1', () => {
  expect(a2.fname()).toBe('Sarah')
})

test('Test Name a2-2', () => {
  expect(a2.lname()).toBe('Frollie')
})

test('Test Name a2-3', () => {
  expect(a2.fullname()).toBe('Sarah Frollie')
})

test('Test Name a2-4', () => {
  expect(a2.initials()).toBe('S.F')
})
