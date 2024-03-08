/**
*! https://leetcode.com/problems/insert-interval/description/?envType=study-plan-v2&envId=top-interview-150
*! 
*! You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and 
*! the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] 
*! that represents the start and end of another interval.
*! 
*! Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and 
*! intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
*! 
*! Return intervals after the insertion.

 

** Example 1:
** 
** Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
** Output: [[1,5],[6,9]]
** Example 2:
** 
** Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
** Output: [[1,2],[3,10],[12,16]]
** Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 

*? Constraints:
*? 
*? 0 <= intervals.length <= 10^4
*? intervals[i].length == 2
*? 0 <= starti <= endi <= 10^5
*? intervals is sorted by starti in ascending order.
*? newInterval.length == 2
*? 0 <= start <= end <= 10^5
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length < 1) {
    intervals.push(newInterval);
    return intervals;
  }
  let res = [];
  let hasPushed = false;

  for (let i = 0; i < intervals.length; i++) {
    if (!hasPushed && newInterval[0] <= intervals[i][0]) {
      res.push(newInterval);
      hasPushed = true;
    }
    res.push(intervals[i]);
  }

  if (!hasPushed) res.push(newInterval);
  res = merge(res);
  intervals = res;
  return intervals;
};

var merge = function (intervals) {
  const res = [];
  let curr = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    while (i < intervals.length && curr[1] >= intervals[i][0]) {
      curr[0] = Math.min(curr[0], intervals[i][0]);
      curr[1] = Math.max(curr[1], intervals[i][1]);
      i++;
    }
    res.push(curr);
    curr = intervals[i];
  }
  if (curr === intervals[intervals.length - 1]) {
    res.push(curr);
  }
  return res;
};

const points = [
  [1, 3],
  [6, 9],
];
const newInterval = [2, 5];

const intervals2 = [];
const newInterval2 = [5, 7];

const intervals3 = [[1, 5]];
const newInterval3 = [2, 7];
// console.log(insert(intervals, newInterval));
// console.log(insert(intervals2, newInterval2));
console.log(insert(intervals3, newInterval3));
