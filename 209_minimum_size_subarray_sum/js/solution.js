/**
 
*! Given an array of positive integers nums and a positive integer target, return the minimal length of a
*! subarray
*! whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

** Example 1:
** |
** Input: target = 7, nums = [2,3,1,2,4,3]
** Output: 2
** 
** Explanation: The subarray [4,3] has the minimal length under the problem constraint.
** 
** Example 2:
** 
** Input: target = 4, nums = [1,4,4]
** Output: 1
** 
** Example 3:
** 
** Input: target = 11, nums = [1,1,1,1,1,1,1,1]
** Output: 0

 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minSize = Number.MAX_VALUE;

  let i = 0,
    j = 1;

  let sum = nums[i];

  while (i < nums.length - 1) {
    if (sum >= target) {
      minSize = minSize > j - i + 1 ? j - i + 1 : minSize;
      sum -= nums[i];
      i++;
      continue;
    }
    if (sum < target) {
      j++;
      sum += nums[j];
      continue;
    }
    if (i === 0 || j >= nums.length - 1) break;
  }

  return minSize <= nums.length ? minSize : 0;
};

const target = 7,
  nums = [2, 3, 1, 2, 4, 3];

const target1 = 4,
  nums1 = [1, 4, 4];

const target2 = 15,
  nums2 = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8];

console.log(minSubArrayLen(target, nums));
console.log(minSubArrayLen(target1, nums1));
console.log(minSubArrayLen(target2, nums2));
