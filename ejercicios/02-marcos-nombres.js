function createFrame(names) {
  const maxLength = Math.max(...names.map(name => name.length));

  const upperAndBottom = "*".repeat(maxLength + 4);
  const body = names.map(name => `* ${name}${' '.repeat(maxLength - name.length)} *`).join('\n');

  return `${upperAndBottom}\n${body}\n${upperAndBottom}`;
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']))

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(['midu']))

// Resultado esperado:
// ********
// * midu *
// ********

console.log(createFrame(['a', 'bb', 'ccc']))

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']))