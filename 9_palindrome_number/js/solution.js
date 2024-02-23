/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return x.toString() === x.toString().split("").reverse().join("");
};

const num = -121;
console.log(isPalindrome(num));
