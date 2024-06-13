/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let res = 0;
  coins.sort((a, b) => a - b);

  const dp = (coins, amount, res = 0) => {
    // base case ??? amount == 0?

    return 1 + dp(coins, amount, res);
  };

  return dp(coins, amount);
};

const coins = [1, 2, 5];
const amount = 11;
