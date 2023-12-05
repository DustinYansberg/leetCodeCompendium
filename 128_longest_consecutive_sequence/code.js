/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longestStreak = 0;
  set.forEach((num) => {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (set.has(currentNum + 1)) {
        currentStreak++;
        currentNum++;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  });
  return longestStreak;
};

const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

console.log(longestConsecutive(nums));
