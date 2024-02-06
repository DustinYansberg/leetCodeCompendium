/**
 
Given an array of positive integers nums and a positive integer target, return the minimal length of a
subarray
whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2

Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (nums.length === 0) {
    return 0;
  }

  let minimumSubArray = Number.MAX_VALUE;

  let i = 0,
    j = 0;

  let runningTotal = nums[0];

  while (i <= nums.length) {
    if (runningTotal < target) {
      if (j < nums.length - 1) {
        j++;
        runningTotal += nums[j];
      } else {
        break;
      }
    } else if (runningTotal >= target) {
      minimumSubArray = Math.min(j + 1 - i, minimumSubArray);
      runningTotal -= nums[i];
      i++;
    }
  }
  return minimumSubArray == Number.MAX_VALUE ? 0 : minimumSubArray;
};