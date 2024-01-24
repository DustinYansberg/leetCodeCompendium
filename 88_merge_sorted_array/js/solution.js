/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = nums1.length - 1;

  while (i < k) {
    // nums[k] = the higher of nums1[i] and nums 2[j]
    nums1[i] > nums2[j]
      ? ((nums1[k] = nums1[i]), i--)
      : ((nums1[k] = nums2[j]), j--);
    k--;
  }
};
