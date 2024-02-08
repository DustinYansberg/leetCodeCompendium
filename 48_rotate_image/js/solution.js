/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length;
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      const temp = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
      matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);
rotate(matrix);
console.log(matrix);

// [0,0] -> [0,2]
// [0,1] -> [1,2]
// [0,2] -> [2,2]

// [1,0] -> [0,1]
// [1,1] -> [1,1]
// [1,2] -> [2,1]

// [2,0] -> [0,0]
// [2,1] -> [1,0]
// [2,2] -> [2,0]

//
