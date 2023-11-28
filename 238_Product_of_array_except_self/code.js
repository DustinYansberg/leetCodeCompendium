/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let res = [];
  let left = 1;
  let right = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = left;
    left *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }
  return res;
};

// https://leetcode.com/problems/product-of-array-except-self/discuss/65622/Simple-Java-solution-in-O(n)-without-extra-space

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
