/**
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left 
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 *
 * check if left is smaller
 * check if right is higher
 * return comparison of both
 */
var isValidBST = function (root, min = null, max = null) {
  if (!root) return true;
  if (min !== null && root.val <= min) return false;
  if (max !== null && root.val >= max) return false;
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
// [5,4,6,null,null,3,7] expected false got true

// [1,1] //expected false got true
// [2,2,2] //expected false got true

//with >= and <=

//[5,4,6,null,null,3,7] expected false got true

//     7
//   6
//     3
// 5
//
//   4
//
