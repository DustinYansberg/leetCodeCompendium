/**
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const colMap = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
  };
  const cellMap = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
  };

  for (let i = 0; i < board.length; i++) {
    const rowMap = {};
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === ".") {
        continue;
      }
      // 0/3 * 3 + 3/3
      const cellIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (cellMap[cellIndex].hasOwnProperty(row[j])) {
        return false;
      }
      cellMap[cellIndex][row[j]] = 1;
      if (colMap[j].hasOwnProperty(row[j])) {
        return false;
      }
      if (rowMap.hasOwnProperty(row[j])) {
        return false;
      }
      colMap[j][row[j]] = 1;
      rowMap[row[j]] = 1;
    }
  }
  return true;
};

// cell
// i = 0,1,2 AND j = 0,1,2    0
// 1 = 0,1,2 AND j = 3,4,5    1
// i = 0,1,2 AND j = 6,7,8    2

// i = 3,4,5 AND j = 0,1,2
// i = 3,4,5 AND j = 3,4,5
// i = 3,4,5 AND j = 6,7,8

// i = 6,7,8 AND j = 0,1,2
// i = 6,7,8 AND j = 3,4,5
// i = 6,7,8 AND j = 6,7,8

board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
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
