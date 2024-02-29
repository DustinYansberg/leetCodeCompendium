/**
 * 106. Construct Binary Tree from Inorder and Postorder Traversal
 *
 *! Given two integer arrays inorder and postorder where inorder is the
 *! inorder traversal of a binary tree and postorder is the postorder traversal
 *! of the same tree, construct and return the binary tree.
 *
 *
 *
 ** Example 1:
 **
 **
 ** Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
 ** Output: [3,9,20,null,null,15,7]
 ** Example 2:
 **
 ** Input: inorder = [-1], postorder = [-1]
 ** Output: [-1]
 *
 *
 *? Constraints:
 *?
 *? 1 <= inorder.length <= 3000
 *? postorder.length == inorder.length
 *? -3000 <= inorder[i], postorder[i] <= 3000
 *? inorder and postorder consist of unique values.
 *? Each value of postorder also appears in inorder.
 *? inorder is guaranteed to be the inorder traversal of the tree.
 *? postorder is guaranteed to be the postorder traversal of the tree.
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (postorder.length <= 1) return new TreeNode(postorder[0], null, null);
  return dfs(inorder, postorder, postorder[postorder.length - 1]);
};

var dfs = function (inorder, postorder, rootVal) {
  if (postorder.length === 0) return null;
  if (postorder.length === 1) {
    return new TreeNode(postorder[0], null, null);
  }

  const n = inorder.indexOf(rootVal);

  const leftInOrder = inorder.slice(0, n);
  const leftPostOrder = postorder.slice(0, n);

  const rightInOrder = inorder.slice(n + 1);
  const rightPostOrder = postorder.slice(n, postorder.length - 1);

  return new TreeNode(
    postorder[postorder.length - 1],
    dfs(leftInOrder, leftPostOrder, leftPostOrder[leftPostOrder.length - 1]),
    dfs(rightInOrder, rightPostOrder, rightPostOrder[rightPostOrder.length - 1])
  );
};
