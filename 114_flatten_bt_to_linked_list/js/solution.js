/**
Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points 
    to the next node in the list and the left child pointer is always null.

The "linked list" should be in the same order as a pre-order traversal of the binary tree.

Example 1:


Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]

Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [0]
Output: [0]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = val === undefined ? 0 : val;
 *   this.left = left === undefined ? null : left;
 *   this.right = right === undefined ? null : right;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return;

  let tmp = root.right;

  if (root.left) {
    flatten(root.left);
    root.right = root.left;
    root.left = null;
  }

  let node = root;
  while (node.right) {
    node = node.right;
  }
  node.right = tmp;

  flatten(root.right);
};

function flatten(root) {
  if (!root) return;

  const flattenHelper = (node) => {
    if (!node) return null;
    if (!node.left && !node.right) return node;

    const leftTail = flattenHelper(node.left);
    const rightTail = flattenHelper(node.right);

    if (leftTail) {
      leftTail.right = node.right;
      node.right = node.left;
      node.left = null;
    }

    return rightTail ? rightTail : leftTail;
  };

  flattenHelper(root);
}

/**

        6
    5

1
        4
    2
        3

        



            6
        5
    2
1       3

 */

// actual: [1,null,2,null,3,null,5,null,6]
// expected: [1,null,2,null,3,null,4,null,5,null,6]
