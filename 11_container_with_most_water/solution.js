/**
 * to find the maxArea of any two points in this array, we can find the area of the first index i and last index j
 * this is found by taking the lower height of the two indices and multiplying it by the distacne between the two points
 * then we move i and j closer to each other by one.
 * the one that moves is whichever represents the shorter index.
 *
 * then we repeat the process until we have examined all possible areas in the array.
 * @param {number[]} eight
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

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const height = [1, 8, 6, 2, 5, 4, 8, 25, 7];
const height = [2, 3, 4, 5, 18, 17, 6];

// const sortedHeight = [18, 17, 6, 5, 4, 3, 2];
console.log(maxArea(height));
