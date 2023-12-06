/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let f = 0;
  let b = s.length - 1;

  while (f <= b) {
    if (s[f] != s[b]) {
      return false;
    }
    f++, b--;
  }
  return true;
};
