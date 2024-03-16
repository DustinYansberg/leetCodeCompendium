// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/?envType=study-plan-v2&envId=top-interview-150
/**
   82. Remove Duplicates from Sorted List II
*! Given the head of a sorted linked list, delete all nodes that have duplicate numbers,
*! leaving only distinct numbers from the original list. Return the linked list sorted as well.

 

** Example 1:
** 
** 
** Input: head = [1,2,3,3,4,4,5]
** Output: [1,2,5]
** Example 2:
** 
** 
** Input: head = [1,1,1,2,3]
** Output: [2,3]
 

*? Constraints:
*? 
*? The number of nodes in the list is in the range [0, 300].
*? -100 <= Node.val <= 100
*? The list is guaranteed to be sorted in ascending order.
 */
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

const readList = (head) => {
  runner = head;
  let res = [];
  while (runner) {
    res.push(runner.val);
    runner = runner.next;
  }
  return res;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  //   if (!head) return null;
  //   const arrMap = [[head.val, 1]];

  //   let curr = head.next;
  //   let it = 0;

  //   while (curr) {
  //     if (arrMap[it][0] === curr.val) {
  //       arrMap[it][1]++;
  //       curr = curr.next;
  //       continue;
  //     }

  //     arrMap.push([curr.val, 1]);
  //     it++;

  //     curr = curr.next;
  //   }
  //   console.log(arrMap);
  //   const newHead = new ListNode();
  //   curr = newHead;
  //   it = 0;

  //   while (it < arrMap.length) {
  //     if (arrMap[it][1] > 1) {
  //       it++;
  //       continue;
  //     }
  //     curr.val = arrMap[it][0];
  //     it++;
  //     if (it < arrMap.length) {
  //       curr.next = new ListNode();
  //       curr = curr.next;
  //     }
  //   }
  //   head = newHead;
  //   return head;

  const sentinel = new ListNode(null, head);
  let prev = sentinel;

  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      prev.next = head.next;
    } else {
      prev = prev.next;
    }
    head = head.next;
  }
  return sentinel.next;
};

let head = [1, 2, 3, 3, 4, 4, 5];
head = convertToListNode(head);
console.log(head);

console.log(readList(deleteDuplicates(head)));

/**
    [
        [1,2],
        [2,1],
        [3,3],
        [4,2],
        [5,1],
    ]
   [
        []
    ]

    if arrMap[it][0] === curr.val
        arrMap[it][1] ++
        curr = curr.next
        continue

    arrMap.push([curr.val, 1])
    it ++

    curr = curr.next

 */
