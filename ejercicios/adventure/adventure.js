/**
 * Una aventura conversacional es un tipo de videojuego en el que los jugadores interactúan
 * con el juego a través de texto en lugar de gráficos. Los jugadores se mueven a través del
 * juego leyendo descripciones de la escena y respondiendo con comandos de texto para avanzar
 * en la historia. Las aventuras conversacionales a menudo presentan desafíos de lógica y
 * rompecabezas que los jugadores deben resolver para avanzar en la trama. Estos juegos se
 * hicieron populares en la década de 1980 y todavía son valorados por su enfoque en la
 * narrativa y la exploración.
 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const adventure = () => {
  readline.question('Acción: ', (word) => {
    // Tu código empieza aquí
    if (word === 'exit') { return readline.close() } // condición de parada
    console.log('Acción: ', word)
    // Tu código acaba aquí
    adventure() // No quitar esto de aquí :-)
  })
}

adventure()
