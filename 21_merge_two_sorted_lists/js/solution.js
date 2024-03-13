// https://leetcode.com/problems/merge-two-sorted-lists/description/?envType=study-plan-v2&envId=top-interview-150
/**
*! You are given the heads of two sorted linked lists list1 and list2.
*! 
*! Merge the two lists into one sorted list. The list should be made by 
*! splicing together the nodes of the first two lists.

*! Return the head of the merged linked list.

** Example 1:
** 
** 
** Input: list1 = [1,2,4], list2 = [1,3,4]
** Output: [1,1,2,3,4,4]
** Example 2:
** 
** Input: list1 = [], list2 = []
** Output: []
** Example 3:
** 
** Input: list1 = [], list2 = [0]
** Output: [0]
 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return list1;
  let newList = new ListNode();
  let runNew = newList;
  let runner1 = list1;
  let runner2 = list2;

  while (runner1 || runner2) {
    const val1 = runner1 ? runner1.val : 200;
    const val2 = runner2 ? runner2.val : 200;
    if (val1 <= val2) {
      // add val1, increment runner1 to runner1.next
      runNew.val = val1;
      runner1 = runner1.next;
    } else {
      //same but for val2
      runNew.val = val2;
      runner2 = runner2.next;
    }
    if (runner1 || runner2) {
      runNew.next = new ListNode();
      runNew = runNew.next;
    }
  }
  return newList;
};

// list1 = []
//list2 = []
// output: [0]
// expected: []

console.log(null < 2);
