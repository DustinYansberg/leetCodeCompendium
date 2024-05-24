/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  const n = nums.length;

  nums.push(...nums);
  const visited = new Set().add(i % n);
};
