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
 * @param {number} k
 * @return {number}
 */

/**
 * return -     from child to parent
 * state -      from parent to child
 *
 * when at node add node val to array
 */
var kthSmallest = function (root, k) {
  var dfs = function (node) {
    if (!node) return;
    nums.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  const nums = [];

  if (!root) return 0;

  dfs(root);
  nums.sort((a, b) => a - b);

  return nums[k - 1];
};
