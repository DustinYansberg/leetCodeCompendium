/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // find first position
  let left = 0,
    right = nums.length - 1,
    firstOccurence = -1;

  while (left <= right) {
    let m = left + Math.floor((right - left) / 2);
    if (nums[m] == target) {
      firstOccurence = m;
      right = m - 1;
    } else if (nums[m] < target) {
      left = m + 1;
    } else {
      right = m - 1;
    }
  }

  // if the first occurence wasn't found
  // exit now to save time
  if (firstOccurence === -1) {
    return [-1, -1];
  }

  // find last position of target
  (left = 0), (right = nums.length - 1);
  let lastOccurence = -1;

  while (left <= right) {
    let m = left + Math.floor((right - left) / 2);
    if (nums[m] == target) {
      lastOccurence = m;
      left = m + 1;
    } else if (nums[m] > target) {
      right = m - 1;
    } else {
      left = m + 1;
    }
  }
  return [firstOccurence, lastOccurence];
};
