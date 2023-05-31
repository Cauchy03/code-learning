/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []  // 定义一个栈
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '(' || c === '{' || c === '[') {  // 如果是左括号直接入栈
      stack.push(c)
    } else {    // 右括号
      if (stack.length === 0) return false  // 此时栈空，无法匹配
      const top = stack[stack.length - 1]   // 获取栈顶
      if (top === '(' && c === ')' || top === '{' && c === '}' || top === '[' && c === ']') {
        stack.pop()    // 如果栈顶是对应的左括号，被匹配，出栈
      } else return false  // 不是对应的左括号，无法匹配
    }
  }

  return stack.length === 0 // 不是对应的左括号，无法匹配
}
// @lc code=end

