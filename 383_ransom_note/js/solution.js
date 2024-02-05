/**
 * 
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const charCount = {};
  for (const char of magazine) {
    if (!charCount.hasOwnProperty(char)) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }
  for (const char of ransomNote) {
    if (charCount.hasOwnProperty(char)) {
      if (charCount[char] <= 0) {
        return false;
      }
      charCount[char]--;
    } else {
      return false;
    }
  }
  return true;
};

const ransomNote = "aa";
const magazine = "ab";

console.log(canConstruct(ransomNote, magazine));
