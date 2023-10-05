/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 定义结果数组
  let res = []
  // 按照intervals的每项数组的第一位进行升序排序
  intervals.sort((a, b) => a[0] - b[0])

  let prev = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i]
    // 判断有重叠情况
    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(prev[1], cur[1])
      // 这里不直接push 后续可能还存在重叠情况

    } else { // 不重合情况 直接push res数组
      res.push(prev)
      prev = cur // 更新prev
    }
  }

  res.push(prev);
  return res
}
// @lc code=end

