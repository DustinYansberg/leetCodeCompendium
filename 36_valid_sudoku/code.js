/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const cols = new Array(9);
  const rows = new Array(9);
  const boxes = new Array(9);

  for (let i = 0; i < rows.length; i++) {
    rows[i] = new Array(9).fill(false);
    cols[i] = new Array(9).fill(false);
    boxes[i] = new Array(9).fill(false);
  }

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      const num = board[y][x] - 1;
      const box = Math.floor(y / 3) * 3 + Math.floor(x / 3);

      if (isNaN(num)) {
        continue;
      }

      if (rows[y][num] || cols[x][num] || boxes[box][num]) {
        return false;
      }
      rows[y][num] = true;
      cols[x][num] = true;
      boxes[box][num] = true;
    }
  }
  return true;
};

board = [
  ["5", "8", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
