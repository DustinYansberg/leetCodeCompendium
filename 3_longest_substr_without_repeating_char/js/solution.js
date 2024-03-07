/**
*! Given a string s, find the length of the longest 
*! substring without repeating characters.

 

** Example 1:
** 
** Input: s = "abcabcbb"
** Output: 3
** Explanation: The answer is "abc", with the length of 3.
** Example 2:
** 
** Input: s = "bbbbb"
** Output: 1
** Explanation: The answer is "b", with the length of 1.
** Example 3:
** 
** Input: s = "pwwkew"
** Output: 3
** Explanation: The answer is "wke", with the length of 3.
** Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

*? Constraints:
*? 
*? 0 <= s.length <= 5 * 10^4
*? s consists of English letters, digits, symbols and spaces.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let seen = new Set(s[0]);
  let res = 0;
  let j = 1;
  for (let i = 0; i < s.length; i++) {
    while (!seen.has(s[j]) && j < s.length) {
      seen.add(s[j]);
      j++;
    }
    res = Math.max(res, j - i);
    seen.delete(s[i]);
  }
  return res;
};
