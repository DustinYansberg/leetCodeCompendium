/**
 According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with 
its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, 
where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

 

Example 1:


Input: board = 

[ [0, 1, 0], 
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]]

  Output: 
[
          [0, 0, 0],
          [1, 0, 1],
          [0, 1, 1],
          [0, 1, 0]]
Example 2:


Input: board = 
[[ 1, 1 ],
 [ 1, 0 ]]
Output: [[1,1],[1,1]]
 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 25
board[i][j] is 0 or 1.
 

Follow up:

Could you solve it in-place? Remember that the board needs to be updated simultaneously: 
You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite,
which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const res = Array.from({ length: board.length }, () =>
    Array(board[0].length).fill(0)
  );

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let neighbors = sum(i, j, board);
      if (board[i][j] === 0) {
        neighbors === 3 && (res[i][j] = 1);
        continue;
      }
      if (neighbors < 2) {
        continue;
      }
      if (neighbors <= 3) {
        res[i][j] = 1;
        continue;
      }
    }
  }

  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[0].length; j++) {
      board[i][j] = res[i][j];
    }
  }
};

function sum(i, j, board) {
  let sum = 0;

  for (let x = i - 1; x < i + 2; x++) {
    if (!board[x]) continue;
    for (let y = j - 1; y < j + 2; y++) {
      if (!board[x][y]) continue;
      sum += board[x][y];
    }
  }
  sum -= board[i][j];
  return sum;
}

const board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
// const board = [
//   [1, 1],
//   [1, 0],
// ];
console.log(board);
console.log(gameOfLife(board));
console.log(board);
