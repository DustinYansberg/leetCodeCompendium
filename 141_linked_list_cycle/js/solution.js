/**
 *
 *
 *  Given head, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached
 * again by continuously following the next pointer. Internally, pos is used to denote the
 * index of the node that tail's next pointer is connected to. Note that pos is not passed
 * as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * using a fast and slow runner, we can compare the two nodes at every pass of the standard runner while loop
 * if its ever the case that fast === slow, we know we have a loop
 * if either of them ever point to null, we do not have a loop.
 *
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;

  while (slow !== null && fast !== null) {
    if (slow === fast) return true;

    slow = slow.next;
    fast = fast.next?.next || null;
  }

  return false;
};

//

// 1 -> 2 -> 3 -> 4 -> 5 -> 1
//                          P
//                          D
