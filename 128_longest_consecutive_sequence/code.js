// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  console.log(nums);
  nums = nums.sort((a, b) => a - b);
  console.log(nums);
  let currCount = 0;
  let highestCount = 0;
  for (let i = 1; i < nums.length; i++) {
    nums[i] > nums[i - 1]
      ? currCount++
      : highestCount < currCount &&
        ((highestCount = currCount), (currCount = 0));
  }
  return highestCount;
};

const nums = [100, 4, 200, 1, 3, 2];
// const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

console.log(longestConsecutive(nums));
