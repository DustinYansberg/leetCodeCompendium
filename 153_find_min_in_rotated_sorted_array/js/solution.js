var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let minVal = nums[left] > nums[right] ? nums[right] : nums[left];

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < minVal) {
      minVal = nums[mid];
      if (nums[mid] < nums[mid + 1]) {
        right = mid - 1;
      }
    } else {
      left = mid + 1;
    }
  }
  return minVal;
};
