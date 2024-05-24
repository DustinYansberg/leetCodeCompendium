/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let start = 0;
  let end = matrix.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (matrix[mid][0] > target) {
      end = mid - 1;
      continue;
    }
    if (matrix[mid][matrix[0].length - 1] < target) {
      start = mid + 1;
      continue;
    }
    return matrix[mid].indexOf(target) !== -1;
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
