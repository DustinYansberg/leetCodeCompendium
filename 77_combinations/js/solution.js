/**
*! Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
*! 
*! You may return the answer in any order. 

*! n choose k equation = (n!) / k!(n-k)!

** Example 1:
** 
** Input: n = 4, k = 2
** Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
** Explanation: There are 4 choose 2 = 6 total combinations.
** Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
** Example 2:
** 
** Input: n = 1, k = 1
** Output: [[1]]
** Explanation: There is 1 choose 1 = 1 total combination.
 

*? Constraints:
*? 
*? 1 <= n <= 20
*? 1 <= k <= n
 */

/**
 * Generates all possible combinations of numbers from 1 to n with length k.
 *
 * @param {number} n - The maximum number to consider.
 * @param {number} k - The length of each combination.
 * @returns {number[][]} - An array of number combinations.
 */
var combine = function (n, k) {
  const res = [];

  const dfs = (index, combination) => {
    if (combination.length === k) {
      res.push([...combination]);
      return;
    }
    for (let i = index; i <= n; i++) {
      combination.push(i);
      dfs(i + 1, combination);
      combination.pop();
    }
  };

  dfs(1, []);
  return res;
};

console.log(combine(4, 2)); // [] => [[1,2,3],[1,2,4],[1,3,4],[2,3,4]]
