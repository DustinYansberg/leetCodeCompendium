var containsDuplicate = function (nums) {
  foundNums = {};

  for (const n of nums) {
    if (foundNums.hasOwnProperty(n)) {
      return true;
    }
    foundNums[n] = 1;
  }
  return false;
};
