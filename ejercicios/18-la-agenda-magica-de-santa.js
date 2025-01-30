/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
    const lines = agenda.split('\n');
    const results = [];
  
    const phoneRegex = /\+(\d{1,2}-\d{3}-\d{3}-\d{3})/g;
  
    const nameRegex = /<([^>]+)>/g;
  
    for (const line of lines) {
        const phoneMatch = line.match(phoneRegex);
        const nameMatch = line.match(nameRegex);
  
        if (phoneMatch && nameMatch) {
            const phoneNumber = phoneMatch[0].replace('+', '');
            const name = nameMatch[0].replace(/[<>]/g, '');
            const address = line.replace(phoneMatch[0], '').replace(nameMatch[0], '').trim();
  
            if (phoneNumber.includes(phone)) {
                results.push({ name, address });
            }
        }
    }
  
    if (results.length === 1) {
        return results[0];
    } else {
        return null;
    }
  }
  
  
  const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
  Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
  <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`
  
  console.log(findInAgenda(agenda, '34-600-123-456'))
  // { name: "Juan Perez", address: "Calle Gran Via 12" }
  //
  console.log(findInAgenda(agenda, '600-987'));
  // { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }
  
  console.log(findInAgenda(agenda, '111'));
  // // // null
  // // // Explicación: No hay resultados
  // //
  console.log(findInAgenda(agenda, '1'));
  // // // null
  // // // Explicación: Demasiados resultados