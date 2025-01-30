/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
    // Definición de las representaciones de las cajas
    const boxRepresentations = {
      1: [" _ ", "|_|"],
      2: [" ___ ", "|___|"],
      5: [" _____ ", "|     |", "|_____|"],
      10: [" _________ ", "|         |", "|_________|"]
    };
  
    // Seleccionar las cajas necesarias
    const boxes = [];
    const availableBoxes = [10, 5, 2, 1];
  
    for (const box of availableBoxes) {
      while (weight >= box) {
        boxes.push(box);
        weight -= box;
      }
    }
  
    // Si no se necesitan cajas, usar la caja de peso 1
    if (boxes.length === 0) {
      boxes.push(1);
    }
  
    // Ordenar las cajas de menor a mayor peso
    boxes.sort((a, b) => a - b);
  
    // Construir la representación visual
    let stack = [];
    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      const boxRep = boxRepresentations[box];
  
      if (i === 0) {
        // Primera caja, añadir todas las líneas
        stack.push(...boxRep);
      } else {
        // Cajas siguientes, reutilizar el borde inferior de la caja anterior
        stack.pop(); // Eliminar el borde inferior de la caja anterior
        stack.push(boxRep[0]); // Añadir el borde superior de la nueva caja
        stack.push(...boxRep.slice(1)); // Añadir el resto de las líneas de la nueva caja
      }
    }
  
    // Unir las líneas con saltos de línea y devolver el resultado
    return stack.join('\n');
  }
  
  console.log(distributeWeight(1));
  // Devuelve:
  //  _
  // |_|
  
  console.log(distributeWeight(2));
  // Devuelve:
  //  ___
  // |___|
  
  console.log(distributeWeight(3));
  // Devuelve:
  //  _
  // |_|_
  // |___|
  
  console.log(distributeWeight(4));
  // Devuelve:
  //  ___
  // |___|
  // |___|
  
  console.log(distributeWeight(5));
  // Devuelve:
  //  _____
  // |     |
  // |_____|
  
  console.log(distributeWeight(6));
  // Devuelve:
  //  _
  // |_|___
  // |     |
  // |_____|