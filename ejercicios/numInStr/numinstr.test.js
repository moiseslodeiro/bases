const numInStr = require('./numinstr')

test('Number in string 1', () => {
  expect(numInStr(['abc', 'abc10'])).toStrictEqual(['abc10'])
})
test('Number in string 2', () => {
  expect(numInStr(['abc', 'ab10c', 'a10bc', 'bcd'])).toStrictEqual(['ab10c', 'a10bc'])
})
test('Number in string 3', () => {
  expect(numInStr(['1', 'a', ' ', 'b'])).toStrictEqual(['1'])
})
test('Number in string 4', () => {
  expect(numInStr(['rct', 'ABC', 'Test', 'xYz'])).toStrictEqual([])
})
test('Number in string 5', () => {
  expect(numInStr(['this IS', '10xYZ', 'xy2K77', 'Z1K2W0', 'xYz'])).toStrictEqual([
    '10xYZ',
    'xy2K77',
    'Z1K2W0'
  ])
})
test('Number in string 6', () => {
  expect(numInStr(['-/>', '10bc', 'abc '])).toStrictEqual(['10bc'])
})
