/**
*! Given a string s and a dictionary of strings wordDict, return true if s can be segmented into 
*! a space-separated sequence of one or more dictionary words.
*! 
*! Note that the same word in the dictionary may be reused multiple times in the segmentation.



** Example 1:
** 
** Input: s = "leetcode", wordDict = ["leet","code"]
** Output: true
** Explanation: Return true because "leetcode" can be segmented as "leet code".
** Example 2:
** 
** Input: s = "applepenapple", wordDict = ["apple","pen"]
** Output: true
** Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
** Note that you are allowed to reuse a dictionary word.
** Example 3:
** 
** Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
** Output: false


*? Constraints:
*? 
*? 1 <= s.length <= 300
*? 1 <= wordDict.length <= 1000
*? 1 <= wordDict[i].length <= 20
*? s and wordDict[i] consist of only lowercase English letters.
*? All the strings of wordDict are unique.

 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const words = new Set(wordDict);
  const queue = [];
  const seen = new Array(s.length + 1).fill(false);
  queue.push(0);

  while (queue.length > 0) {
    const start = queue.shift();
    if (start === s.length) return true;

    for (let end = start + 1; end <= s.length; end++) {
      if (seen[end]) {
        continue;
      }

      if (words.has(s.substring(start, end))) {
        queue.push(end);
        seen[end] = true;
      }
    }
  }
  return false;
};

const s = "leetcode";
const wordDict = ["leet", "code"];

console.log(wordBreak(s, wordDict));

//queue = [8]
//          |   |
// s = "leetcode"
//      000010001
