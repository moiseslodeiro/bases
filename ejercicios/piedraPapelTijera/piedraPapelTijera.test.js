const play = require('./piedraPapelTijera')

test('¡Piedra, papel, tijera, lagarto, Spock! (Gana J1)', () => {
  expect(play(1, 2)).toBe(1)
  expect(play(1, 3)).toBe(1)
})

test('¡Piedra, papel, tijera, lagarto, Spock! (Gana J2)', () => {
  expect(play(4, 2)).toBe(2)
  expect(play(0, 4)).toBe(2)
})

test('¡Piedra, papel, tijera, lagarto, Spock! (Empate)', () => {
  expect(play(6, 6)).toBe(0)
  expect(play(3, 3)).toBe(0)
})
