/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// // 暴力
// const subarraySum = (nums, k) => {
//   let count = 0
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j]
//       if (sum == k) count++
//     }
//   }
//   return count
// }

var subarraySum = function (nums, k) {
  let count = 0
  let map = new Map()
  // 保存当前位置的前缀和
  let prevfixSum = 0
  // 前缀和存储到map中
  map.set(0, 1)

  for (let i = 0; i < nums.length; i++) {
    prevfixSum += nums[i]

    // 比较历史前缀和 如果存在count 直接加
    if (map.has(prevfixSum - k)) {
      count += map.get(prevfixSum - k)
    }

    // 统计每一项前缀和出现次数
    if (map.has(prevfixSum)) {
      map.set(prevfixSum, map.get(prevfixSum) + 1)
    } else {
      map.set(prevfixSum, 1)
    }
  }

  return count
}
// @lc code=end

