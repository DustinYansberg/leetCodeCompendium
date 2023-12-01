/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  let encodedString = "";
  for (const str of strs) {
    encodedString += str;
    encodedString += "π";
  }
  return encodedString;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  const decodedArray = s.split("π");
  decodedArray.length -= 1;
  return decodedArray;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

console.log(decode(encode(["hello", "world"])));

//https://leetcode.com/problems/encode-and-decode-strings/description/
