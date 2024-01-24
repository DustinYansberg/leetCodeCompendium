/**
 * loop through sorted array. When we find a duplicate,
 * we want to run a nested while loop that counts all the duplicate values
 * then we remove them all with one splice operation before we begin our
 * search for the next set of duplicates
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      let j = i + 1;
      let spliceCount = 0;
      while (nums[j] === nums[i]) {
        spliceCount++;
        j++;
      }
      nums.splice(i, spliceCount);
    }
  }
  return nums.length;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(nums);
console.log(removeDuplicates(nums));
console.log(nums);
