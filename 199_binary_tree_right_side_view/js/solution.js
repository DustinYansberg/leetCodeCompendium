// https://leetcode.com/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * 
*! Given the root of a binary tree, imagine yourself standing on the right side 
*! of it, return the values of the nodes you can see ordered from top to bottom.

 

** Example 1:
** 
** Input: root = [1,2,3,null,5,null,4]
** Output: [1,3,4]
** Example 2:
** 
** Input: root = [1,null,3]
** Output: [1,3]
** Example 3:
** 
** Input: root = []
** Output: []
 

*? Constraints:
*? 
*? The number of nodes in the tree is in the range [0, 100].
*? -100 <= Node.val <= 100
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  // return arr of all the node values from the root to the right most leaf

  const arr = [];
  if (!root) return arr;
  const queue = [root];
  while (queue.length > 0) {
    const size = queue.length;
    let node = queue[queue.length - 1];
    arr.push(node.val);
    for (let i = 0; i < size; i++) {
      node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return arr;
};

//      1           stack = []
//    /   \         arr =[4, 6, 7]
//   2     3        size = 2
//  /               node = 7
// 4

// root = [1,2,3,4]

// Output
// [1,3]
// Expected
// [1,3,4]

// Create binary tree nodes
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Construct the binary search tree
const node1 = new TreeNode(4);
const node2 = new TreeNode(2);
const node3 = new TreeNode(6);
const node4 = new TreeNode(1);
const node5 = new TreeNode(3);
const node6 = new TreeNode(5);
const node7 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

// Visual representation of the BST
console.log("        4");
console.log("      /   \\");
console.log("     2     6");
console.log("    / \\   / \\");
console.log("   1   3 5   7");
