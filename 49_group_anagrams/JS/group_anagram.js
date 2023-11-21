/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groupedAnagrams = {};
  strs.forEach((str) => {
    let sortedStr = str.split("").sort().join("");
    !groupedAnagrams[sortedStr]
      ? (groupedAnagrams[sortedStr] = [str])
      : groupedAnagrams[sortedStr].push(str);
  });

  const out = [];
  for (const key in groupedAnagrams) {
    out.push(groupedAnagrams[key]);
  }
  return out;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
