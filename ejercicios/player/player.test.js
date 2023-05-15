const Player = require('./player')

/**
 * @see https://www.eurosport.es/natacion/mireia-belmonte_prs156912/person.shtml
 * @see https://www.atptour.com/es/players/rafael-nadal/n409/overview
 * @see https://www.moiseslodeiro.es/
 */

const player1 = new Player(36, 187, 85, 'tenis')
player1.name = 'Rafa Nadal'
const player2 = new Player(32, 170, 59, 'swimming')
player2.name = 'Mireia Belmonte'
const player3 = new Player(35, 185, 80, 'sillonball')
player3.name = 'Moisés Lodeiro'

test('Test Rafa Nadal', () => {
  expect(player1.getAge()).toBe('Rafa is 36')
  expect(player1.getLastName()).toBe('Nadal')
  expect(player1.getHeight()).toBe('Rafa is 187cm')
  expect(player1.getWeight()).toBe('Rafa weighs 85kg')
  expect(player1.getSport()).toBe('Rafa Nadal plays tenis')
})

test('Test Mireia Belmonte', () => {
  expect(player2.getAge()).toBe('Mireia is 32')
  expect(player2.getLastName()).toBe('Belmonte')
  expect(player2.getHeight()).toBe('Mireia is 170cm')
  expect(player2.getWeight()).toBe('Mireia weighs 59kg')
  expect(player2.getSport()).toBe('Mireia Belmonte plays swimming')
})

test('Test Moi :)', () => {
  expect(player3.getAge()).toBe('Moisés Lodeiro is 35')
  expect(player3.getLastName()).toBe('Lodeiro')
  expect(player3.getHeight()).toBe('Moisés Lodeiro is 185cm')
  expect(player3.getWeight()).toBe('Moisés Lodeiro weighs 80kg')
  expect(player3.getSport()).toBe('Moisés Lodeiro plays sillonball')
})
