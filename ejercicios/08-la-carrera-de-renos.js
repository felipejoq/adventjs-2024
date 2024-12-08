/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  let tab = indices.length - 1;
  return indices.map((position, rail) => {
    let adjustedPosition = position >= 0 ? position : length + position;
    let raceLine = ' '.repeat(tab > 0 ? tab-- : tab) + '~'.repeat(adjustedPosition);
    if (position !== 0) {
      raceLine += 'r' + '~'.repeat(length - adjustedPosition - 1);
    } else {
      raceLine += '~'.repeat(length - adjustedPosition);
    }
    return `${raceLine} /${rail + 1}`;
  }).join("\n");
}

console.log(drawRace([0, 5, -3], 10))
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8))
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12))
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3
*/