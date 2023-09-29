/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 随意取一个数，若有公共前缀每一项都应该有
  let pre = strs[0]
  for (let i = 0; i < strs.length; i++) {
    while (!strs[i].startsWith(pre)) {
      if (strs.length === 0) return ''
      pre = pre.slice(0, -1)
    }
  }
  return pre
}
// @lc code=end
// console.log(longestCommonPrefix(["flower","flow","flight"]))