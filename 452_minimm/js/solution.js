/**
 There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

 

Example 1:

Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
Example 2:

Input: points = [[1,2],[3,4],[5,6],[7,8]]
Output: 4
Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.
Example 3:

Input: points = [[1,2],[2,3],[3,4],[4,5]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].
 
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  let arrowCount = 1;
  points.sort((a, b) => a[1] - b[1]);
  let end = points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= end) {
      // The current balloon can be burst by the current arrow
      continue;
    }
    // The current balloon cannot be burst by the current arrow
    // Update the firstBalloon variable to the current balloon
    end = points[i][1];
    arrowCount++;
  }
  return arrowCount;
};

const points = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
const points2 = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];

const points3 = [
  [3, 9],
  [7, 12],
  [3, 8],
  [6, 8],
  [9, 10],
  [2, 9],
  [0, 9],
  [3, 9],
  [0, 6],
  [2, 8],
];
console.log(findMinArrowShots(points3));

/**
(_______________________)
(_______________)
   (____________________)
   (_________________)
      (______________)
      (_________________)
      (_________________)
               (_____)
                        (___)
                  (_______________)
1  2  3  4  5  6  7  8  9  10 11 12
 */

/**
firstBalloon = [7,12]
i = 2
points[i] = [7,12]
arrow = 2

*/
