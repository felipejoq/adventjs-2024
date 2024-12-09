// @ es la locomotora del tren.
// o son los vagones del tren.
// * es una fruta mágica.
// · son espacios vacíos.

// 'L': izquierda
// 'R': derecha
// 'U': arriba
// 'D': abajo.

/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  // find head train
  const indexHeadTrain = board.findIndex(line => line.includes('@'));
  const lineHeadTrain = board[indexHeadTrain];
  const indexHead = lineHeadTrain.indexOf('@');

  // move train
  const char = {
    'U': board[indexHeadTrain - 1]?.[indexHead],
    'D': board[indexHeadTrain + 1]?.[indexHead],
    'L': lineHeadTrain[indexHead - 1],
    'R': lineHeadTrain[indexHead + 1],
  }[mov]

  // check crash / eat / none
  switch (char) {
    case 'o':
      return 'crash';
    case '*':
      return 'eat';
    case '·':
      return 'none';
    case undefined:
      return 'crash';
  }
}

const board = ['·····', '*····', '@····', 'o····', 'o····']

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
