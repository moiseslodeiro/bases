/**
 * Wordle es un juego divertido en el que tienes que adivinar una palabra secreta.
 * El juego te muestra una palabra con líneas negras que representan cada letra
 * de la palabra. Tu trabajo es adivinar qué palabra es, probando diferentes
 * palabras hasta que aciertes.
 *
 * Si adivinas una letra correcta pero en una posición incorrecta, la letra se
 * mostrará en amarillo. Si está en su posición correcta, en verde. En caso
 * contrario (es decir, que la letra no pertenezca a la palabra), se mostrará en
 * negro.
 */

// Dependencies
const c = require('colors')

// No descomentar el final la siguiente línea :-)
// prettier-ignore
const WORDS = ['abre', 'allo', 'amas', 'amen', 'ames', 'ampo', 'ando', 'anos', 'anuo', 'aoja', 'aojo', 'aran', 'aras', 'arda', 'ardo', 'aren', 'ares', 'ario', 'arma', 'asan', 'asas', 'asen', 'aseo', 'ases', 'asia', 'atas', 'ates', 'auno', 'aves', 'ayas', 'baga', 'bala', 'bañe', 'bisa', 'boas', 'boba', 'boja', 'bojo', 'bosa', 'bota', 'bote', 'boto', 'boya', 'boyo', 'cace', 'caen', 'caer', 'calo', 'case', 'cave', 'cayo', 'cedo', 'cefo', 'ceno', 'cesa', 'chad', 'coge', 'coja', 'cojo', 'come', 'crea', 'cree', 'cuba', 'dañe', 'deja', 'dias', 'dijo', 'dime', 'dome', 'dora', 'dore', 'duos', 'dura', 'echa', 'echo', 'ecos', 'emes', 'emus', 'enes', 'eñes', 'enya', 'eran', 'eras', 'eres', 'esas', 'eses', 'fico', 'fumo', 'gato', 'goda', 'guam', 'hace', 'haga', 'hago', 'hala', 'hara', 'hare', 'haya', 'hice', 'hile', 'hube', 'hubo', 'huna', 'huya', 'iban', 'ibas', 'ices', 'idas', 'idos', 'iran', 'iras', 'iria', 'izas', 'jade', 'jugo', 'kiev', 'lami', 'lave', 'lees', 'lega', 'leia', 'lima', 'loas', 'luca', 'lusa', 'mala', 'mali', 'mece', 'medi', 'mees', 'mesa', 'mese', 'meso', 'meto', 'mide', 'moja', 'mojo', 'mola', 'moño', 'more', 'moza', 'muca', 'nace', 'ndea', 'niue', 'note', 'nuda', 'nuez', 'nula', 'odas', 'ojos', 'olas', 'Oman', 'oras', 'oren', 'ores', 'orno', 'orzo'] // eslint-disable-line no-use-before-define
const WORD_SIZE = 4
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log(`${c.bgGreen('W')}${c.bgGreen('o')}${c.bgRed('r')}${c.bgYellow('d')}${c.bgBlack('l')}${c.bgGreen('e')}${c.bgMagenta('!')}`)

const wordle = () => {
  readline.question('Palabra: ', (word) => {
    // Tu código empieza aquí
    if (word === 'exit') { return readline.close() } // condición de parada
    console.log('Has escrito: ', word)
    // Tu código acaba aquí
    wordle() // No quitar esto de aquí :-)
  })
}

wordle()
´
