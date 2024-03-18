/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let curr = head;
  const left = new ListNode(),
    right = new ListNode();
  let lRun = left,
    rRun = right;
  while (curr) {
    if (curr.val < x) {
      lRun.next = new ListNode();
      lRun = lRun.next;
      lRun.val = curr.val;
    } else {
      rRun.next = new ListNode();
      rRun = rRun.next;
      rRun.val = curr.val;
    }
    curr = curr.next;
  }

  lRun.next = right.next;
  return left.next;
};
