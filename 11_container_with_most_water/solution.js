/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0,
    j = height.length - 1,
    width = height.length - 1,
    maxArea = 0;

  while (i < j) {
    maxArea = Math.max(area(height[i], height[j], width), maxArea);
    height[i] < height[j] ? i++ : j--;
    width--;
  }

  return maxArea;
};

var area = function (lHeight, rHeight, width) {
  return lHeight < rHeight ? lHeight * width : rHeight * width;
};
// var area = function (i, j, height) {
//   return height[i] < height[j] ? height[i] * (j - i) : height[j] * (j - i);
// };

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const height = [1, 8, 6, 2, 5, 4, 8, 25, 7];
const height = [2, 3, 4, 5, 18, 17, 6];

// const sortedHeight = [18, 17, 6, 5, 4, 3, 2];
console.log(maxArea(height));
