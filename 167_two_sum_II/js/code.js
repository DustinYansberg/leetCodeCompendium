/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const compliments = {};
  for (let i = 0, j = numbers.length - 1; i <= j; i++, j--) {
    if (compliments[numbers[i]] !== undefined) {
      return [compliments[numbers[i]] + 1, i + 1].sort((a, b) => a - b);
    }
    compliments[target - numbers[i]] = i;
    if (compliments[numbers[j]] !== undefined) {
      return [compliments[numbers[j]] + 1, j + 1].sort((a, b) => a - b);
    }
    compliments[target - numbers[j]] = j;
  }
};

const numbers = [5, 25, 75];

console.log(twoSum(numbers, 100));
