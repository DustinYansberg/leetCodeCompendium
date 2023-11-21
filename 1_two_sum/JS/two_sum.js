var twoSum = function (nums, target) {
  const complements = {};

  for (let i = 0; i < nums.length; i++) {
    if (complements.hasOwnProperty(nums[i])) {
      return [i, complements[nums[i]]];
    }
    complements[target - nums[i]] = i;
  }
  return [];
};
