/**
 * To see if we can complete a circuit while only moving in a clockwise direction where
 * gas[i] is the amount of gas a location provides and cost[i] is the amount
 * of gas it costs to move to the next location, we can pull out the differences of
 * the gas and cost to leave each location.
 *
 * then we want to check the sum of theses differences.
 * if the sum of the differences is positive, we have a possible path, and we can continue
 *
 * then we want to loop through the array of the differences and sum them up consecutively.
 * we also want to keep track of the starting location for the current sum.
 *
 * if the sum ever drops negative, we know that the current start is
 * not possible, so we reset the start index to the next index in the loop and we reset
 * the accumulated sum
 *
 * once we reach the end of the array, we want to take whatever the start index is,
 * and run one more loop from the beginning of the array to start index to see
 * if we can in fact make a complete circuit without running out of gas
 *
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  diffs = [];
  for (let i = 0; i < gas.length; i++) {
    diffs.push(gas[i] - cost[i]);
  }
  const sum = diffs.reduce((acc, curr) => acc + curr, 0);
  if (sum < 0) return -1;

  let start = 0;
  let total = 0;
  for (let i = 0; i < diffs.length; i++) {
    total += diffs[i];
    if (total < 0) {
      start = i + 1;
      total = 0;
    }
  }
  for (let j = 0; j < start; j++) {
    total += diffs[j];
    if (total < 0) {
      return -1;
    }
  }
  return start;
};

const gas = [3, 1, 1],
  cost = [1, 2, 2];

console.log(canCompleteCircuit(gas, cost));
