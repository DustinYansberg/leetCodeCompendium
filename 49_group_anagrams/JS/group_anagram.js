/**

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

** Lowercase ascii values are  97 (a) to 122 (z)

 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const dict = {};

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (dict.hasOwnProperty(sortedStr)) {
      dict[sortedStr].push(str);
    } else {
      dict[sortedStr] = [str];
    }
  }
  return Object.values(dict);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
