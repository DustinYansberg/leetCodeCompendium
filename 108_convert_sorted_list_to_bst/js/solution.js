var sortedArrayToBST = function (nums) {
  function recursion(nums) {
    const mid = Math.floor(nums.length / 2);
    if (nums.length === 1) {
      return new TreeNode(nums[0], null, null);
    }
    if (nums.length === 0) {
      return null;
    }
    const left = nums.slice(0, mid);
    const right = nums.slice(mid + 1);
    return new TreeNode(nums[mid], recursion(left), recursion(right));
  }

  return recursion(nums);
};
