/**
 *
 * L: Mover hacia la izquierda
 * R: Mover hacia la derecha
 * U: Mover hacia arriba
 * D: Mover hacia abajo
 *
 * *: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
 * !: El siguiente movimiento se invierte (ej: R!L se considera como RR)
 * ?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
 *
 * true: si el robot vuelve a estar justo donde empezó
 * [x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo
 */

/**
 * @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  let x = 0;
  let y = 0;
  const movesArray = moves.split('');
  const madeMoves = new Set();

  const applyMove = (move, multiplier) => {
    switch (move) {
      case 'R': x += multiplier; break;
      case 'L': x -= multiplier; break;
      case 'U': y += multiplier; break;
      case 'D': y -= multiplier; break;
    }
  };

  for (let i = 0; i < movesArray.length; i++) {
    let move = movesArray[i];
    let multiplier = 1;

    if (move === '*') {
      multiplier = 2;
      move = movesArray[++i];
    }

    if (move === '!') {
      move = movesArray[++i];
      applyMove(move, -multiplier);
    } else if (move === '?') {
      move = movesArray[++i];
      if (!madeMoves.has(move)) {
        applyMove(move, multiplier);
        madeMoves.add(move);
      }
    } else {
      applyMove(move, multiplier);
      madeMoves.add(move);
    }
  }

  return x === 0 && y === 0 ? true : [x, y];
}

console.log(isRobotBack('R'))     // [1, 0]
console.log(isRobotBack('RL'))    // true
console.log(isRobotBack('RLUD')) // true
console.log(isRobotBack('*RU'))  // [2, 1]
console.log(isRobotBack('LLL!R'))  // [-4, 1]

console.log(isRobotBack('R*U'))  // [1, 2]
console.log(isRobotBack('LLL!R')) // [-4, 0]
console.log(isRobotBack('R?R')) // [1, 0]
console.log(isRobotBack('U?D')) // true
console.log(isRobotBack('R!L')) // [2,0]
console.log(isRobotBack('U!D')) // [0,2]
console.log(isRobotBack('R?L')) // true
console.log(isRobotBack('U?U')) // [0,1]
console.log(isRobotBack('*U?U')) // [0,2]
console.log(isRobotBack('U?D?U')) // true
//
// // Ejemplos paso a paso:
console.log(isRobotBack('R!U?U')) // [1,0]
// // 'R'  -> se mueve a la derecha
// // '!U' -> se invierte y se convierte en 'D'
// // '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'
//
console.log(isRobotBack('UU!U?D')) // [0,1]
// // 'U'  -> se mueve arriba
// // 'U'  -> se mueve arriba
// // '!U' -> se invierte y se convierte en 'D'
// // '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'