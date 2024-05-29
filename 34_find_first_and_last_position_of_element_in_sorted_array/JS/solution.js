/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  let startIndex = -1;
  let endIndex = -1;
  // search for start index
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] >= target) {
      r = m - 1;
    }
    if (nums[l] == target) startIndex = l;
  }

  l = 0;
  r = nums.length - 1;
  // search for end index
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] > target) {
      r = m - 1;
    } else if (nums[m] <= target) {
      l = m + 1;
    }
    if (nums[r] == target) endIndex = r;
  }
  return [startIndex, endIndex];
};

//                                       m
//                                    r
//                                       l
const nums = [5, 7, 7, 8, 8, 8, 8, 8, 8, 10],
  target = 8;

console.log(searchRange(nums, target));
