/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (n < k || k === 0) return []
  // write code here
  const results = []
  const temp = []
  function strack(start) {
    if (temp.length === k) {
      results.push([...temp])
      return
    }
    for (let i = start; i <= n; i++) {
      temp.push(i)
      strack(i + 1)
      temp.pop()
    }
  }
  strack(1)
  return results
}
// @lc code=end

