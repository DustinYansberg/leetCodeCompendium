var findPeakElement = function (nums) {
  if (nums.length === 1 || nums[0] > nums[1]) {
    return 0;
  }
  if (nums[nums.length - 1] > nums[nums.length - 2]) {
    return nums.length - 1;
  }
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if (nums[mid] < nums[mid + 1]) {
      i = mid + 1;
    } else if (nums[mid] < nums[mid - 1]) {
      j = mid - 1;
    }
  }
  return -1;
};
