/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  const regex = /(.)\1/g

  while (regex.test(s)) {
    s = s.replace(regex, '')
  }

  return s
}


console.log(removeSnow('zxxzoz')) // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(removeSnow('abcdd')) // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

console.log(removeSnow('zzz')) // -> "z"
// 1. Eliminamos "zz", quedando "z"

console.log(removeSnow('a')) // -> "a"
// No hay montículos repetidos