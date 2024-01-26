/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * 
Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  var rotate = function (nums, k) {
    if (k === nums.length) {
      return;
    }
    if (k > nums.length) {
      k = k % nums.length;
    }
    nums.reverse();
    for (let i = 0; i < k; i++) {
      nums.push(nums[i]);
    }
    nums.reverse();
    for (let i = k; i > 0; i--) {
      nums.pop();
    }
  };
};

/**
 * Second Solution
 */

var reverse = function (nums, start, end) {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

// Reverse Entire Array
// Reverse K elements
// Reverse remaining elements
