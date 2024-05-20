/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function swap(ptr1, ptr2) {
  let tmp = ptr2.val;
  ptr2.val = ptr1.val;
  ptr1.val = tmp;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var sortList = function (head) {
  let swapped;

  if (head == null) return;

  do {
    swapped = false;
    let current = head;

    while (current.next != null) {
      if (current.val > current.next.val) {
        swap(current, current.next);
        swapped = true;
      }
      current = current.next;
    }
  } while (swapped);

  return head;
};
