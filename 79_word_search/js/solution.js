// https://leetcode.com/problems/word-search/?envType=study-plan-v2&envId=top-interview-150

/**
*! Given an m x n grid of characters board and a string word, return true if word 
*! exists in the grid.
*! 
*! The word can be constructed from letters of sequentially adjacent cells, where 
*! adjacent cells are horizontally or vertically neighboring. The same letter 
*! cell may not be used more than once.

 

** Example 1:
**
**      ~~~~~IMAGE~~~~~
**  
** Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
** Output: true
** Example 2:
**
**      ~~~~~IMAGE~~~~~
** 
** Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
** Output: true
** Example 3:
**
**      ~~~~~IMAGE~~~~~
** 
** Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
** Output: false
 

*? Constraints:
*? 
*? m == board.length
*? n = board[i].length
*? 1 <= m, n <= 6
*? 1 <= word.length <= 15
*? board and word consists of only lowercase and uppercase English letters.
 

*! Follow up: Could you use search pruning to make your solution faster with a larger board?
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (board[y][x] === word[0]) {
        if (dfs(board, x, y, word, board[y][x], new Set())) {
          return true;
        }
      }
    }
  }
  function dfs(board, x, y, word, str, visited) {
    if (visited.has(`${y}, ${x}`)) {
      console.log(`Already visited ${y} , ${x}`);
      console.log(str, "\n");
      return false;
    }
    visited.add(`${y}, ${x}`);

    const pos = str.length;

    if (str === word) {
      return true;
    }
    if (board[y + 1]) {
      if (board[y + 1][x] === word[pos]) {
        console.log(
          `FROM: ${y} , ${x}\nTO: ${y + 1} , ${x} \n${board[y][x]}->${
            board[y + 1][x]
          }\n`
        );
        if (dfs(board, x, y + 1, word, str + board[y + 1][x], visited)) {
          return true;
        }
      }
    }
    if (board[y - 1]) {
      if (board[y - 1][x] === word[pos]) {
        console.log(
          `FROM: ${y} , ${x}\nTO: ${y - 1} , ${x} \n${board[y][x]}->${
            board[y - 1][x]
          }\n`
        );
        if (dfs(board, x, y - 1, word, str + board[y - 1][x], visited)) {
          return true;
        }
      }
    }
    if (board[y][x + 1] === word[pos]) {
      console.log(
        `FROM: ${y} , ${x}\nTO: ${y} , ${x + 1}  \n${board[y][x]}->${
          board[y][x + 1]
        }\n`
      );
      if (dfs(board, x + 1, y, word, str + board[y][x + 1], visited)) {
        return true;
      }
    }
    if (board[y][x - 1] === word[pos]) {
      console.log(
        `FROM: ${y} , ${x}\nTO: ${y} , ${x - 1} \n${board[y][x]}->${
          board[y][x - 1]
        }\n`
      );
      if (dfs(board, x - 1, y, word, str + board[y][x - 1], visited)) {
        return true;
      }
    }
    visited.delete(`${y}, ${x}`);
    return false;
  }
  return false;
};

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "E", "S"],
  ["A", "D", "E", "E"],
];
const word = "ABCESEEEFS";

console.log(exist(board, word));

return;
