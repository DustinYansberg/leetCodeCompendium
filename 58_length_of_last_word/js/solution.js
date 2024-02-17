/**
https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

*/

/**
 * solution 1, trim possible white space from the end of the string
 * find the last index of " "(space)
 * return the length minus the position of the last " " minus 1
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trimEnd();
  return s.length - s.lastIndexOf(" ") - 1;
};

/**
 * trim white space from end
 * split to array
 * pop the last entry of the array
 * return the length of that popped entry
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trimEnd().split(" ").pop().length;
};
