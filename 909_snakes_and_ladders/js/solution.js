/**
You are given an n x n integer matrix board where the cells are labeled from 1 to n2 in a 
Boustrophedon style starting from the bottom left of the board (i.e. board[n - 1][0]) and 
alternating direction each row.

You start on square 1 of the board. In each move, starting from square curr, do the following:

Choose a destination square next with a label in the range [curr + 1, min(curr + 6, n2)].
This choice simulates the result of a standard 6-sided die roll: i.e., there are always at 
most 6 destinations, regardless of the size of the board.
If next has a snake or ladder, you must move to the destination of that snake or ladder. 
Otherwise, you move to next.

The game ends when you reach the square n2.
A board square on row r and column c has a snake or ladder if board[r][c] != -1. The destination
of that snake or ladder is board[r][c]. Squares 1 and n2 do not have a snake or ladder.

Note that you only take a snake or ladder at most once per move. If the destination to a snake 
or ladder is the start of another snake or ladder, you do not follow the subsequent snake or ladder.

For example, suppose the board is [[-1,4],[-1,3]], and on the first move, your destination square
is 2. You follow the ladder to square 3, but do not follow the subsequent ladder to 4.
Return the least number of moves required to reach the square n2. If it is not possible to reach 
the square, return -1.

 

Example 1:


Input: board = [
                [-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1],
                [-1,-1,-1,-1,-1,-1],
                [-1,35,-1,-1,13,-1],
                [-1,-1,-1,-1,-1,-1],
                [-1,15,-1,-1,-1,-1]
               ]
Output: 4
Explanation: 
In the beginning, you start at square 1 (at row 5, column 0).
You decide to move to square 2 and must take the ladder to square 15.
You then decide to move to square 17 and must take the snake to square 13.
You then decide to move to square 14 and must take the ladder to square 35.
You then decide to move to square 36, ending the game.
This is the lowest possible number of moves to reach the last square, so return 4.
Example 2:

Input: board = [[-1,-1],[-1,3]]
Output: 1
 

Constraints:

n == board.length == board[i].length
2 <= n <= 20
board[i][j] is either -1 or in the range [1, n^2].
The squares labeled 1 and n^2 do not have any ladders or snakes.
 */

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  // const n = board.length;
  // const goal = n ** 2;

  // for (row in board) {
  //   if (row % 2 == 0) {
  //     //traverse right to left
  //     for (let i = n - 1; i >= 0; i--) {
  //       const tile = n * (n - row - 1) + n - i;
  //       const value = board[row][i];
  //       console.log(tile, value);
  //     }
  //   } else {
  //     //traverse left to right
  //     for (let i = 0; i < n; i++) {
  //       const tile = n * (n - row - 1) + n - (n - i) + 1;
  //       const value = board[row][i];
  //       console.log(tile, value);
  //     }
  //   }
  // }
  const n = board.length;
  const cells = new Array(n ** 2 + 1);
  let label = 1;
  const columns = [];
  for (let i = 0; i < n; i++) {
    columns.push(i);
  }
  for (let i = n - 1; i >= 0; i--) {
    for (const column of columns) {
      cells[label] = [i, column];
      label++;
    }
    columns.reverse();
  }
  const dist = new Array(n ** 2 + 1).fill(-1);

  let q = [1];
  dist[1] = 0;

  while (q.length > 0) {
    const curr = q.shift();
    const distance = Math.min(curr + 6, n ** 2) + 1;
    for (let i = curr + 1; i < distance; i++) {
      const [row, column] = cells[i];
      const destination = board[row][column] !== -1 ? board[row][column] : i;

      if (dist[destination] == -1) {
        dist[destination] = dist[curr] + 1;
        q.push(destination);
      }
    }
  }
  return dist[n * n];
};

const board = [
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 35, -1, -1, 13, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 15, -1, -1, -1, -1],
];

console.log(snakesAndLadders(board));

// 36 - [2, 5] = 19
// 36 - 19 = 17

// 36 - [4, 5] = 7
// 36 - 7 = 29

// 36 - (n-(i) * (goal-(n*row)))

// row n-1 : 1 through 6
// row n-2 : 7 through 12
