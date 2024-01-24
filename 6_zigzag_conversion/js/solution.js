/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;
  let rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push([]);
  }

  let currRow = 0;
  let step = 1;

  for (const c of s) {
    rows[currRow].push(c);

    currRow += step;

    if (currRow == 0 || currRow == numRows - 1) {
      step = -step;
    }
  }
  let result = "";
  for (const row of rows) {
    result += row.join("");
  }
  return result;
};
let s = "PAYPALISHIRING";
console.log(convert(s, 3)); // PAHNAPLSIIGYIR
console.log(convert(s, 4)); // PINALSIGYAHRPI
