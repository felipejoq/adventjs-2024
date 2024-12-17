/**
 * @param {Array<Object>} data
 * @returns {string}
 */
function drawTable(data) {
  const keys = Object.keys(data[0]);
  const maxLength = keys.map(key => key.length);

  data.forEach(row => {
    keys.forEach((key, index) => {
      maxLength[index] = Math.max(
        maxLength[index],
        String(row[key]).length
      );
    });
  });

  const header = keys.map((key, index) => (
    ' ' + String(key).charAt(0).toUpperCase() + String(key).slice(1)
  ).padEnd(maxLength[index] + 2));

  const headerLine = '+' + header.map(key => '-'.repeat(key.length)).join('+') + '+';

  const body = data.map(row => {
    return '|' + keys.map(key => (
      ' ' + String(row[key])
    ).padEnd(maxLength[keys.indexOf(key)] + 2)).join('|') + '|';
  }).join('\n');

  return [
    headerLine,
    '|' + header.join('|') + '|',
    headerLine,
    body,
    headerLine
  ].join('\n');
}


console.log(drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
]))
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

console.log(drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
]))
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+