// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/?envType=study-plan-v2&envId=top-interview-150
/**
19. Remove Nth Node From End of List

*! Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

** Example 1:
** 
** 
** Input: head = [1,2,3,4,5], n = 2
** Output: [1,2,3,5]
** Example 2:
** 
** Input: head = [1], n = 1
** Output: []
** Example 3:
** 
** Input: head = [1,2], n = 1
** Output: [1]
 

*? Constraints:
*? 
*? The number of nodes in the list is sz.
*? 1 <= sz <= 30
*? 0 <= Node.val <= 100
*? 1 <= n <= sz
 
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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

var removeNthFromEnd = function (head, n) {
  let runner = head;
  let it = 1;
  const map = new Map();

  while (runner) {
    map.set(it, runner);
    runner = runner.next;
    it++;
  }

  if (map.size <= 1) return null; // Return null if there is only one node in the list

  const nodeToEdit = map.get(it - (n + 1));

  if (!nodeToEdit) {
    // If nodeToEdit is null, it means we need to remove the head of the list
    return head.next;
  }

  nodeToEdit.next = map.get(it - (n - 1)) ? map.get(it - (n - 1)) : null;

  return head;
};

let head = [1, 2]; // expected [] output [0]
const n = 1;

head = convertToListNode(head);

console.log(readList(removeNthFromEnd(head, n)));

/**
 *! Line 53 in solution.js
 *!              throw new TypeError(__serialize__(ret) + " is not valid value for the expected return type ListNode");
 *!              ^
 *! TypeError: {"val":1,"next":undefined} is not valid value for the expected return type ListNode
 *!     Line 53: Char 20 in solution.js (Object.<anonymous>)
 *!     Line 16: Char 8 in runner.js (Object.runner)
 *!     Line 37: Char 26 in solution.js (Object.<anonymous>)
 *!     at Module._compile (node:internal/modules/cjs/loader:1376:14)
 *!     at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
 *!     at Module.load (node:internal/modules/cjs/loader:1207:32)
 *!     at Module._load (node:internal/modules/cjs/loader:1023:12)
 *!     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
 *!     at node:internal/main/run_main_module:28:49
 *! Node.js v20.10.0
 */
