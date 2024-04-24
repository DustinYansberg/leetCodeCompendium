// https://leetcode.com/problems/letter-combinations-of-a-phone-number/?envType=study-plan-v2&envId=top-interview-150
/**
 
*! Given a string containing digits from 2-9 inclusive, return all possible letter combinations
*! that the number could represent. Return the answer in any order.
*! 
*! A mapping of digits to letters (just like on the telephone buttons) is given below. Note that
*! 1 does not map to any letters.


** Example 1:
** 
** Input: digits = "23"
** Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
** Example 2:
** 
** Input: digits = ""
** Output: []
** Example 3:
** 
** Input: digits = "2"
** Output: ["a","b","c"]
 

*? Constraints:
*? 
*? 0 <= digits.length <= 4
*? digits[i] is a digit in the range ['2', '9'].
 */

const KEYBOARD = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const dfs = (startIndex, path, res, digits) => {
  if (startIndex === digits.length) {
    res.push(path.join(""));
    return;
  }
  let nextNumber = digits.charAt(path.length);
  for (let letter of KEYBOARD[nextNumber]) {
    path.push(letter);
    dfs(startIndex + 1, path, res, digits);
    path.pop();
  }
};
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  let res = [];
  dfs(0, [], res, digits);
  return res;
};

console.log(letterCombinations("23"));
