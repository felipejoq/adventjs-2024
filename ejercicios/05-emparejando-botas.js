/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {

  const shoesMap = shoes.reduce((acc, shoe) => {
    if (!acc[shoe.size]) {
      acc[shoe.size] = {I: 0, R: 0}
    }
    acc[shoe.size][shoe.type]++
    return acc
  }, {});

  return Object.entries(shoesMap).reduce((acc, [size, {I, R}]) => {
    const pairs = Math.min(I, R); // Obtiene la cantidad de pares de zapatos
    for (let i = 0; i < pairs; i++) {
      acc.push(+size) // Agrega el tamaño del zapato y si hay más de un par, lo agrega más de una vez
    }
    return acc
  }, []);
}

const shoes2 = [
  {type: 'I', size: 38},
  {type: 'R', size: 38},
  {type: 'I', size: 38},
  {type: 'I', size: 38},
  {type: 'R', size: 38}
]
console.log(organizeShoes(shoes2))
// [38, 38]

const shoes = [
  {type: 'I', size: 38},
  {type: 'R', size: 38},
  {type: 'R', size: 42},
  {type: 'I', size: 41},
  {type: 'I', size: 42}
]

console.log(organizeShoes(shoes))

// [38, 42]

const shoes3 = [
  {type: 'I', size: 38},
  {type: 'R', size: 36},
  {type: 'R', size: 42},
  {type: 'I', size: 41},
  {type: 'I', size: 43}
]

console.log(organizeShoes(shoes3))
// []