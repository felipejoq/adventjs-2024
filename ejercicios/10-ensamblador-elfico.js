/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  const registers = {}
  let index = 0

  function getValue(x) {
    // Si x es un número, lo devolvemos parseado
    if (/^-?\d+$/.test(x)) {
      return parseInt(x, 10)
    }
    // Si x es un registro, si no existe lo tomamos como 0
    return registers[x] === undefined ? 0 : registers[x]
  }

  while (index < instructions.length) {
    const [instruction, x, y] = instructions[index].split(' ')

    if (instruction === 'MOV') {
      registers[y] = getValue(x)
      index++
    } else if (instruction === 'INC') {
      registers[x] = getValue(x) + 1
      index++
    } else if (instruction === 'DEC') {
      registers[x] = getValue(x) - 1
      index++
    } else if (instruction === 'JMP') {
      if (getValue(x) === 0) {
        index = parseInt(y, 10)
      } else {
        index++
      }
    } else {
      index++
    }
  }

  return registers['A']
}

const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

console.log(compile(instructions)) // -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C -> El registro C pasa a ser 0
 2: JMP C 1 -> C es 0, salta a la instrucción en el índice 1
 1: INC C -> El registro C pasa a ser 1
 2: JMP C 1 -> C es 1, ignoramos la instrucción
 3: MOV C A -> Copiamos el registro C en A. Ahora A es 1
 4: INC A -> El registro A pasa a ser 2
 */