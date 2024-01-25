// I have two approaches here. The first approach is more intuitive and naive. The second approach
//      is a bit less obvious, but the logic is sound and it eliminates the need to sort the array.

/**
 ** First Approach
 *  For this approach, we first sort the array. The thinking behind this is that if we have the array sorted,
 *      we can simply count the number of occurences of each number, and the number whose occurences first
 *      meets the "majority threshold" will be the number that needs to be returned.
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  const majorityThreshold = Math.floor(nums.length / 2);
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) count++;
    else count = 1;
    if (count > majorityThreshold) return nums[i];
  }
};
/**
 ** Second Approach
 *  For this approach we keep the array in it's original order, because sorting is entirely unecessary.
 *
 *  The problem wants to findthe majority element. This means that it wants to find the element that
 *      occupies more than half the spaces in the array. With this in mind, it is good to remember that
 *      any element that occupies more than half the array will always have x+1 consecutive occurences of itself
 *      in a row, where x is the number of consecutive occurences of any other element.
 *
 *  Because this is the case, we simply only need to keep track of a count variable which we can increment every
 *      time we find a connsecutive occurence of an element, and decrement every time we find a non consecutive
 *      occurence of that element.
 *
 *  To do this, we need to keep track of the element we are counting, and we need to keept track of the count.
 *  We also need to have conditions in the for loop that will reset the count and reassign the element variable
 *      every time we decrement the count down to 0. This is because if the count gets to zero, there is no
 *      guarantee that the currently tracked element is the majority element, so we want to track the next element.
 *  We want to increment the count when the current element matches nums[i] in the loop.
 *  We want to decrement when neither of the previous conditions are met.
 *
 *  In the end, the tracked element that remains is the only element that has more than half of the space in the array
 *      occupied, so we return that.
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let el;
  let cnt = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (cnt === 0) {
      cnt = 1;
      el = nums[i];
    } else if (nums[i] === el) {
      cnt++;
    } else {
      cnt--;
    }
  }
  return el;
};
