/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  let i = 0,
    lo = 1,
    hi = nums.length - 1;

  while (nums[i] <= 0) {
    if (nums[i] == nums[i - 1]) {
      i++;
      continue;
    }
    lo = i + 1;
    hi = nums.length - 1;
    while (lo < hi) {
      const sum = nums[i] + nums[lo] + nums[hi];
      if (sum < 0) {
        lo++;
      } else if (sum > 0) {
        hi--;
      } else {
        res.push([nums[i], nums[lo], nums[hi]]);
        hi--;
        lo++;
        while (nums[lo] === nums[lo - 1]) {
          lo++;
        }
      }
    }
    i++;
  }
  return res;

  /**
   let i = 0,
     j = 0;
   while (i < nums.length - 2) {
     if (j >= nums.length - 1) {
       i++;
       j = i + 1;
     }
     dict[(nums[i] + nums[j]) * -1] = [nums[i], nums[j]];
 
     j++;
   }
 
   for (let i = 0; i < nums.length; i++) {
     if (dict[nums[i]]) {
       // console.log(res);
       res.push([nums[i], ...dict[nums[i]]]);
       // console.log(res);
       delete dict[nums[i]];
     }
   }
   res.forEach((arr) => arr.sort((a, b) => a - b));
   let set = new Set(res);
   return res;
   * 
   */
};

// const nums = [0, 0, 0, 0];
const nums = [-1, 0, 1, 0];
//           [-4, -1, -1, 0, 1, 2]
// const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
