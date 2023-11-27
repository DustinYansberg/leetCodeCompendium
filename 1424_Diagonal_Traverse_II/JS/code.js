/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
  // Initialize the result array and a Map to hold arrays of numbers with the same row + column sum
  const res = [];
  const map = new Map();

  // Iterate over each row and each number in the row
  nums.forEach((row, i) => {
    row.forEach((num, j) => {
      // Calculate the sum of the row and column indices
      const sum = i + j;

      // If the Map doesn't already contain this sum, add an empty array to the Map with this sum as the key
      if (!map.has(sum)) {
        map.set(sum, []);
      }

      // Push the current number to the array associated with this sum in the Map
      map.get(sum).push(num);
    });
  });

  // Get all keys from the Map, sort them in ascending order, and store them in the `sums` array
  const sums = Array.from(map.keys()).sort((a, b) => a - b);

  // Iterate over each sum in the `sums` array
  sums.forEach((sum) => {
    // Get the array associated with this sum from the Map, reverse it, and push all its elements to the `res` array
    res.push(...map.get(sum).reverse());
  });

  // Return the `res` array
  return res;
};
