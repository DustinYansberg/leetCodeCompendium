/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans = null;
  var dfs = function (node, p, q) {
    if (!node) return false;
    const left = dfs(node.left, p, q) ? 1 : 0;
    const right = dfs(node.right, p, q) ? 1 : 0;
    const mid = node === p || node === q ? 1 : 0;

    if (mid + left + right >= 2) {
      ans = node;
    }
    return mid + left + right > 0;
  };

  dfs(root, p, q);
  return ans;
};

// if both p and q are found, return my value
//
