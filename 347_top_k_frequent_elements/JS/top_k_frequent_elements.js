/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // we can track the count of each number in an object.
  // Then we can convert the object into a sortable array by accessing its entries
  // then we can sort the array according to the count of each number
  // then, using map we can get rid of the count from each entry so only the sorted numbers remain
  // then we can return the array up to k index by way of the slice function

  const numsCount = {};
  for (const num of nums) {
    !numsCount[num] ? (numsCount[num] = 1) : numsCount[num]++;
  }
  const sortedNumsCount = Object.entries(numsCount).sort(
    ([, a], [, b]) => b - a
  );

  const out = sortedNumsCount.map((item) => item[0]);
  return out.slice(0, k);
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
