/**

*! Given two integer arrays preorder and inorder where preorder is the preorder traversal 
*! of a binary tree and inorder is the inorder traversal of the same tree, construct and 
*! return the binary tree.

 

** Example 1:


** Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
** Output: [3,9,20,null,null,15,7]
** Example 2:

** Input: preorder = [-1], inorder = [-1]
** Output: [-1]
 

*? Constraints:

*? 1 <= preorder.length <= 3000
*? inorder.length == preorder.length
*? -3000 <= preorder[i], inorder[i] <= 3000
*? preorder and inorder consist of unique values.
*? Each value of inorder also appears in preorder.
*? preorder is guaranteed to be the preorder traversal of the tree.
*? inorder is guaranteed to be the inorder traversal of the tree.

 */

/**
 * Definition for a binary tree node.
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  if (preorder.length <= 1) return new TreeNode(preorder[0], null, null);
  return dfs(preorder, inorder, preorder[0]);
}

function dfs(preorder, inorder, rootValue) {
  // base case
  //
  if (preorder.length === 0) return null;
  if (preorder.length === 1) {
    return new TreeNode(preorder[0], null, null);
  }

  const n = inorder.indexOf(rootValue);

  const leftInOrder = inorder.slice(0, n);
  const leftPreOrder = preorder.slice(1, n + 1);

  const rightInOrder = inorder.slice(n + 1);
  const rightPreOrder = preorder.slice(n + 1);

  return new TreeNode(
    preorder[0],
    dfs(leftPreOrder, leftInOrder, leftPreOrder[0]),
    dfs(rightPreOrder, rightInOrder, rightPreOrder[0])
  );
}

// INORDER
// dfs(left)
// capture value
// dfs(right)

//PREORDER
// capture value
// dfs(left)
// dfs(right)

// leftChildCount = the number of values that appear before n in the inorder aray
// where n is the first value of the preorder array

/**
        3
      /   \
    9       20
   / \     /  \
  2   6   15    7

inorder: [2, 9, 6, 3, 15, 20, 7]
preorder: [3, 9, 2, 6, 20, 15, 7]
n: 3
rootValue: 3

RIGHT:

inorder: [15, 20, 7]
preorder: [20, 15, 7]
n: 3
rootValue: 3


LEFT:

inorder: [2, 9, 6]
preorder: [9, 2, 6]
n: 3
rootValue: 9

inorder: [2]
preorder: [2]
n: 1
rootValue: 0




3 is root
2 is left most leaf
7 is right most leaf

*/

/**



 */
