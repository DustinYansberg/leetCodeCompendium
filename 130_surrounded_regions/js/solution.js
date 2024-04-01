/**
* https://leetcode.com/problems/surrounded-regions/description/?envType=study-plan-v2&envId=top-interview-150
*! Given an m x n matrix board containing 'X' and 'O', capture all regions
*!  that are 4-directionally surrounded by 'X'.
*! 
*! A region is captured by flipping all 'O's into 'X's in that surrounded region.

 

** Example 1:
** 
** 
** Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
** Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
** Explanation: Notice that an 'O' should not be flipped if:
** - It is on the border, or
** - It is adjacent to an 'O' that should not be flipped.
** The bottom 'O' is on the border, so it is not flipped.
** The other three 'O' form a surrounded region, so they are flipped.
** Example 2:
** 
** Input: board = [["X"]]
** Output: [["X"]]
 

*? Constraints:
*? 
*? m == board.length
*? n == board[i].length
*? 1 <= m, n <= 200
*? board[i][j] is 'X' or 'O'.
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const m = board.length;
  const n = board[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const bfs = (board, row, col) => {
    let hasMetEdge = false;
    let modifiedBoard = [];
    for (const arr of board) {
      modifiedBoard.push([...arr]);
    }

    const queue = [];
    queue.push([row, col]);
    while (queue.length > 0 && !hasMetEdge) {
      const curr = queue.shift();
      for (const direction of directions) {
        const nextRow = curr[0] + direction[0];
        const nextCol = curr[1] + direction[1];
        if (0 <= nextRow && nextRow < m && 0 <= nextCol && nextCol < n) {
          if (modifiedBoard[nextRow][nextCol] == "O") {
            modifiedBoard[nextRow][nextCol] = "X";
            queue.push([nextRow, nextCol]);
          }
        } else {
          hasMetEdge = true;
          break;
        }
      }
    }
    // console.log(`board: ${board}`);
    // console.log(`modifiedBoard: ${modifiedBoard}`);
    return hasMetEdge ? board : modifiedBoard;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O") {
        board = bfs(board, i, j);
      }
    }
  }
  return board;
};

// const board = [
//   ["O", "O"],
//   ["O", "O"],
// ];

const board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

console.log(solve(board));
