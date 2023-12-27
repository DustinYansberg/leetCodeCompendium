/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let l = 0,
    r = matrix.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (matrix[m][0] > target) {
      r = m - 1;
      continue;
    }
    if (matrix[m][matrix[m].length - 1] < target) {
      l = m + 1;
      continue;
    }
    return matrix[m].includes(target);
  }
  return false;
};

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;

console.log(searchMatrix(matrix, target));
