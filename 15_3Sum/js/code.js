/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  // the end goal is to have all possible two-pairs and seek out their complement that adds to 0.
  // add these triplets as exclusive arrays to an array of all triplets that add to 0
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
};
nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
