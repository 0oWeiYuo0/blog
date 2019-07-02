/**
 * 337. House Robber III
 * Input: [3,2,3,null,3,null,1]
 * Output: 7
 * Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
 *
 * Example 2:
 * Input: [3,4,5,1,3,null,1]
 * Output: 9
 * Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  function tryRob(root, include){
    if (!root) return 0

    var res = tryRob(root.left, true) + tryRob(root.right, true)

    if (include) {
      res = Math.max(res, root.val + tryRob(root.left, false) + tryRob(root.right, false))
    }

    return res
  }

  return tryRob(root, true)
};
