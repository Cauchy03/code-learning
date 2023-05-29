/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let arr = []
  let max = 0
  for (let i = 0; i < s.length; i++) {
    // 查找之前的数组是否已经存在
    let index = arr.indexOf(s[i])
    // 如果存在删除当前索引及之前的元素
    if (index !== -1) {
      arr.splice(0, index + 1)
    }
    arr.push(s.charAt(i))
    // 记录max最大的值
    max = Math.max(arr.length, max)
  }
  return max
}

// const str = 'hello';
// str.charAt(1)  // 输出结果：e
// str[1]         // 输出结果：e
// str.charAt(5)  // 输出结果：''
// str[5]         // 输出结果：undefined

// @lc code=end

