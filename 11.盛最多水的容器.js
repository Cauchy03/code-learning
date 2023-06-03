/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 1. 暴力超时
// var maxArea = function (height) {
//   let max = 0
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
//     }
//   }
//   return max
// }

// 2. 双指针
var maxArea = function (height) {
  let max = 0
  // 双指针定义头尾
  let i = 0, j = height.length - 1
  while (i < j) {
    // 从左右两边开始计算面积
    max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
    // 较高的线来寻找较长的范围，左值较小时，左指针增加，右值较小时，右指针减小
    height[i] <= height[j] ? i++ : j--
  }
  return max
}
// @lc code=end

