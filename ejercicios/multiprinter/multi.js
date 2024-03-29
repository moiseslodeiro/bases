/**
 * Vamos a darle una vuelta de tuerca al prints (si no lo has resuelto, ¡es hora!). En este
 * caso vamos a suponer que la misma impresora puede recibir documentos de varias páginas (1, 2,
 * 3, 1 gritón, etc.) y que cada página consume una cantidad de colores diferentes (una consumirá
 * 2 de cyan, 0 de magenta y 5 de amarillo, otra consumirá 1 de cyan, 2 de magenta, 3 de amarillo,
 * etc.).
 *
 * Realiza los cambios necesarios sabiendo que a la función printer se le pasan dos o más argumentos,
 * donde el primero sigue siendo el cartucho y los restantes, las páginas a imprimir. La función debe
 * devolver cuántas páginas podrá imprimir con ese cartucho e imprimir un mensaje de error y devolver
 * -1 en caso de no poder imprimir la totalidad de las páginas que tiene que imprimir.
 *
 */

function printer(cartridge, pages) {
  // Inicio código
  let numPages = 0;
  for (let i = 0; i < pages.length; i++) {
    console.log(cartridge);

    // console.log(pages[i].yellow);
    if (cartridge.cyan >= pages[i].cyan && cartridge.yellow >= pages[i].yellow && cartridge.magenta >= pages[i].magenta) {
      cartridge.cyan -= pages[i].cyan;
      cartridge.magenta -= pages[i].magenta;
      cartridge.yellow -= pages[i].yellow;
      numPages++;
    } else {
      console.error('F');
      return -1;
    }
  }

  return numPages;

  // Fin código
}

/* const cartridge01 = {
  cyan: 5,
  magenta: 3,
  yellow: 7
}

const page01 = {
  cyan: 2,
  magenta: 0,
  yellow: 1
}

console.log(printer(cartridge01, [page01]))
console.log(printer(cartridge01, [page01]))
console.log(printer(cartridge01, [page01])) */

module.exports = printer
