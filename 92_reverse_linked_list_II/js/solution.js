/**
 * https://leetcode.com/problems/reverse-linked-list-ii/description/?envType=study-plan-v2&envId=top-interview-150
 * 
*! Reverse Linked List II
*! Given the head of a singly linked list and two integers left and right 
*! where left <= right, reverse the nodes of the list from position left 
*! to position right, and return the reversed list.

 

** Example 1:
** 
** 
** Input: head = [1,2,3,4,5], left = 2, right = 4
** Output: [1,4,3,2,5]
** Example 2:
** 
** Input: head = [5], left = 1, right = 1
** Output: [5]
 

*? Constraints:
*? 
*? The number of nodes in the list is n.
*? 1 <= n <= 500
*? -500 <= Node.val <= 500
*? 1 <= left <= right <= n

 */

// Definition for singly-linked list.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const stackage = [];
  let pos = 1;
  let current = head;
  while (current) {
    if (pos >= left && pos <= right) {
      stackage.push(current.val);
    }
    if (pos > right) {
      break;
    }
    current = current.next;
    pos++;
  }
  current = head;
  pos = 1;
  while (current) {
    if (pos >= left && pos <= right) {
      const p = stackage.pop();
      current.val = p;
    }
    if (pos > right) {
      break;
    }
    current = current.next;
    pos++;
  }
  return head;
};

const readList = (head) => {
  runner = head;
  let res = [];
  while (runner) {
    res.push(runner.val);
    runner = runner.next;
  }
  return res;
};

const convertToListNode = (arr) => {
  let head = null;
  let prev = null;

  for (let i = 0; i < arr.length; i++) {
    const newNode = new ListNode(arr[i]);

    if (!head) {
      head = newNode;
      prev = newNode;
    } else {
      prev.next = newNode;
      prev = newNode;
    }
  }

  return head;
};

const arr = [1, 2, 3, 4, 5];

const head = convertToListNode(arr);

// console.log(readList(head));

console.log(head);
console.log(arr);
console.log(reverseBetween(head, 2, 4));
console.log(readList(head));
