// https://leetcode.com/problems/permutations/description/?envType=study-plan-v2&envId=top-interview-150
/**
*! Given an array nums of distinct integers, return all the possible permutations. 
*! You can return the answer in any order.

 

** Example 1:
** 
** Input: nums = [1,2,3]
** Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
** Example 2:
** 
** Input: nums = [0,1]
** Output: [[0,1],[1,0]]
** Example 3:
** 
** Input: nums = [1]
** Output: [[1]]
 

*? Constraints:
*? 
*? 1 <= nums.length <= 6
*? -10 <= nums[i] <= 10
*? All the integers of nums are unique.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  res = [];
  const dfs = (nums, path = []) => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    // nextNum = nums[index];
    for (const num of nums) {
      if (path.indexOf(num) !== -1) continue;
      path.push(num);
      dfs(nums, path);
      path.pop();
    }
  };
  dfs(nums);
  return res;
};

console.log(permute([1, 2, 3]));
