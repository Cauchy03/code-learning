/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */

var levelOrder = function (root) {
  if (!root) return []
  let res = []
  let quene = [root]
  while (quene.length) { // 没有节点在列，就是遍历完毕
    let subRes = []
    let len = quene.length // 当前层的节点数目
    for (let i = 0; i < len; i++) { // 遍历当前层的节点
      let cur = quene.shift() // 出列
      subRes.push(cur.val) // 填充当前层subRes数组
      if (cur.left) quene.push(cur.left) // 下层节点入列
      if (cur.right) quene.push(cur.right)
    }
    res.push(subRes)
  }
  return res
}

//#region
// JS创建二叉树
// class TreeNode {
//   constructor(value) {
//       this.value = value
//       this.left = null
//       this.right = null
//   }
// }

// function buildBinaryTree(arr, index = 0) {
//   if (index >= arr.length || arr[index] === null) {
//       return null
//   }

//   const node = new TreeNode(arr[index]);
//   node.left = buildBinaryTree(arr, 2 * index + 1)
//   node.right = buildBinaryTree(arr, 2 * index + 2)
//   return node
// }
//#endregion
// @lc code=end

