/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 递归
  // if (root == null) { // 遍历到null节点时，不用翻转，直接返回它本身
  //   return root;
  // }
  // const temp = root.left
  // root.left = root.right
  // root.right = temp
  // // 内部的翻转交给递归去做
  // invertTree(root.left)
  // invertTree(root.right)
  // return root

  // 非递归
  if (!root) {
    return null;
  }
  const quene = [root] // 定义队列
  while (quene.length > 0) {
    const node = quene.shift() // 出列
    // 交换左右子树
    const temp = node.left
    node.left = node.right
    node.right = temp
    // 非空子节点入队
    if (node.left) {
      quene.push(node.left)
    }
    if (node.right) {
      quene.push(node.right)
    }
  }

  return root
}
// @lc code=end

