/**
 * @param {*} piles each "pile" is the number of bananas to be eaten
 * @param {*} h the number of hours before the guards come back
 * @returns the minimum rate at which bananas need to be eaten before the guards return
 */

// https://leetcode.com/problems/koko-eating-bananas/description/

function minEatingSpeed(piles, h) {
  let l = 1;
  let r = Math.max(...piles);
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (canFinishEating(piles, h, m)) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return l;
}

function canFinishEating(piles, h, k) {
  let hoursUsed = 0;
  for (const pile of piles) {
    hoursUsed += Math.ceil(pile / k);
  }
  return hoursUsed <= h;
}
