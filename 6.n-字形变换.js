/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (string, numRows) {
  if (numRows == 1) return string

  const len = Math.min(string.length, numRows)
  // 初始化 避免undefinded
  const rows = new Array(len).fill('')
  // 记录当前下标
  let curRow = 0
  let down = false

  for (const c of string) {
    rows[curRow] += c
    if (curRow == 0 || curRow == numRows - 1) down = !down
    curRow += down ? 1 : -1
  }
  // 拼接数组 
  return rows.join('');
}
// @lc code=end

