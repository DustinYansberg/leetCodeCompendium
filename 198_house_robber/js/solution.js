/**
*! You are a professional robber planning to rob houses along a street. 
*! Each house has a certain amount of money stashed, the only constraint 
*! stopping you from robbing each of them is that adjacent houses have security 
*! systems connected and it will automatically contact the police if two 
*! adjacent houses were broken into on the same night.

*! Given an integer array nums representing the amount of money of each house,
*! return the maximum amount of money you can rob tonight without alerting the police.


** Example 1:
** 
** Input: nums = [1,2,3,1]
** Output: 4
** Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
** Total amount you can rob = 1 + 3 = 4.
** Example 2:
** 
** Input: nums = [2,7,9,3,1]
** Output: 12
** Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
** Total amount you can rob = 2 + 9 + 1 = 12. 

*? Constraints:
*? 
*? 1 <= nums.length <= 100
*? 0 <= nums[i] <= 400 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const memo = new Array(nums.length);
  memo.fill(-1);
  var robFrom = function (i, nums) {
    if (i >= nums.length) {
      return 0;
    }

    if (memo[i] > -1) {
      return memo[i];
    }

    const ans = Math.max(robFrom(i + 1, nums), robFrom(i + 2, nums) + nums[i]);
    // console.log(memo[i]);
    memo[i] = ans;
    // console.log(memo[i]);
    return ans;
  };

  return robFrom(0, nums);
};

var dpRob = function (nums) {
  let n = nums.length;
  if (n === 0) return 0;

  maxRobbedAmount = new Array(nums.length + 1);

  maxRobbedAmount[n] = 0;
  maxRobbedAmount[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    maxRobbedAmount[i] = Math.max(
      maxRobbedAmount[i + 1],
      maxRobbedAmount[i + 2] + nums[i]
    );
  }

  return maxRobbedAmount[0];
};

//            |
const nums = [2, 1, 1, 2]; // 4

// maxRobbedAmount[3] = 2
// maxRobbedAmount[2] =

[4, 3, 2, 2, 0];

// [2, 1, 9, 13, 1]
//  +  -  ?  +  - ?+
// [8, 7, 3, 4, 2, 7, 2]
// [2,7,9,3,1]
// [4,1,2,7,5,3,1] out: 12 expected: 14
// start by comparing the index to its neighbors
// if greater than BOTH neighbors, grab it
// move index up by 2
// else move index up by 1

console.log(dpRob(nums));
console.log(rob(nums));
