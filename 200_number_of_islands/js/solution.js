/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  var dfs = function (grid, row, col) {
    for (const direction of directions) {
      const nextRow = row + direction[0];
      const nextCol = col + direction[1];

      if (
        0 <= nextRow &&
        nextRow < m &&
        0 <= nextCol &&
        nextCol < n &&
        grid[nextRow][nextCol] == "1"
      ) {
        grid[nextRow][nextCol] = "0";
        dfs(grid, nextRow, nextCol);
      }
    }
  };

  let is = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        is++;
        dfs(grid, i, j);
      }
    }
  }
  return is;
};

// map of island maps

const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "1", "0"],
  ["0", "0", "1", "1", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid));
