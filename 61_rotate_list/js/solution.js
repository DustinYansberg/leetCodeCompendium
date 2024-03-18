// import { ListNode, readList, convertToListNode } from "../../Helpers/ListNode";

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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || k === 0) return head;
  let curr = head;
  let size = 1;
  while (curr.next) {
    curr = curr.next;
    size++;
  }
  curr.next = head;
  curr = head;
  if (size <= k) {
    k %= size;
  }
  size -= k;
  let i = 1;
  while (i < size) {
    curr = curr.next;
    i++;
  }
  let res = curr.next;
  curr.next = null;
  return res;
};

let head = [1, 2, 3, 4, 5];
head = convertToListNode(head);

rotateRight(head);
