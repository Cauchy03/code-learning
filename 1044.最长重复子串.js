/*
 * @lc app=leetcode.cn id=1044 lang=javascript
 *
 * [1044] 最长重复子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function (s) {
  let maxStr = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = i + maxStr.length + 1; j < s.length; j++) {
      // 截取当前窗口内子串
      let curStr = s.slice(i, j)
      // 查询左指针后面是否存在相同子串
      // console.log('i:', s[i], i, 'j:', s[j], j, curStr)
      if (s.indexOf(curStr, i + 1) > -1) {
        maxStr = curStr
      }
      // 左指针后面不存在相同子串则跳出循环
      else break
    }
  }
  return maxStr
}
// @lc code=end


