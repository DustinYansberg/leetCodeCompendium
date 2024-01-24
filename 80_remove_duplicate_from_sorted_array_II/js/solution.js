/**
 * we want to keep at most 2 of each element in the array
 * so remove any more than a single duplciate
 *
 * we can loop through the array and count how many elements exist for each element.
 * anytime our count goes over 2, we can splice out that element
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 1,
    i = 0;
  while (i < nums.length) {
    // if (nums[i] !== nums[i + 1]) {
    // }
    if (nums[i] === nums[i + 1]) {
      count++;
      if (count > 2) {
        nums.splice(i, 1);
        i--;
      }
    } else {
      count = 1;
    }
    i++;
  }
  return nums.length;
};
const nums = [1, 1, 1, 2, 2, 3];
console.log(nums);
console.log(removeDuplicates(nums));
console.log(nums);
