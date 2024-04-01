/**
*! Given a binary tree
*! 
*! struct Node {
*!   int val;
*!   Node *left;
*!   Node *right;
*!   Node *next;
*! }
*! Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
*! 
*! Initially, all next pointers are set to NULL.

 

** Example 1:
** 
** 
** Input: root = [1,2,3,4,5,null,7]
** Output: [1,#,2,3,#,4,5,7,#]
** Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its 
** next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with 
** '#' signifying the end of each level.
** Example 2:
** 
** Input: root = []
** Output: []
 

*? Constraints:

*? The number of nodes in the tree is in the range [0, 6000].
*? -100 <= Node.val <= 100
 
 */

/**
 * Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

const stacks = [[]];
let i = 0;
/**
root = 4
i = 0
stacks = 
[
    level : 0 [
                val: 1 next: null
              ]    
    level : 1 [
                val: 3 next: null
                val: 2 next: 3
              ]    
    level : 2 [
                val: 7 next: null
                val: 5 next: 7
                val: 4 next: 5
              ]    
]
 */
var connect = function (root) {
  if (!root) return root;
  const q = [root];
  while (q.length > 0) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const node = q.shift();
      if (i < size - 1) {
        node.next = q[0];
      }
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
  }
  return root;
};
