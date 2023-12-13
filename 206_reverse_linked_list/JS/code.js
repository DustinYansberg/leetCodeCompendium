function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let previous = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};

const reverseListRecursion = (head) => {
  if (!head || !head.next) {
    return head;
  }

  const reversedList = reverseListRecursion(head.next);
  head.next.next = head;
  head.next = null;

  return reversedList;
};

const three = new ListNode(3, null);
const two = new ListNode(2, three);
const one = new ListNode(1, two);

console.log();
console.log(reverseListRecursion(one));
