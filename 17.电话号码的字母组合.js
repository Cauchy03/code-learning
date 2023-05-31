/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */


// // DFS + 回溯
// var letterCombinations = function (digits) {
//   if (digits.length < 1) return []
//   let res = []
//   const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' }
//   // dfs: 当前构建的字符串为curStr，现在“翻译”到第i个数字，基于此继续“翻译”
//   const dfs = (curStr, i) => {  // curStr是当前字符串，i是扫描的指针
//     if(i > digits.length - 1) { // 指针越界，递归的出口
//       res.push(curStr)          // 将解推入res
//       return                    // 结束当前递归分支
//     }
//     let letters = map[digits[i]]    // 当前数字对应的字母
//     for (const letter of letters) { // 一个字母是一个选择，对应一个递归分支
//       dfs(curStr + letter, i + 1)   // 选择翻译成letter，生成新字符串，i指针右移继续翻译（递归）
//     }

//   }

//   dfs('',0) // 递归的入口，初始字符串为''，从下标0开始翻译
//   return res
// }


// BFS 
var letterCombinations = function(digits) {
  if(digits.length < 1) return []
  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' }

  let res = [''] // 初始化
  for (let i = 0; i < digits.length; i++) { // bfs的层数，即digits的长度
    const levelSize = res.length            // 当前层的节点个数
    for (let j = 0; j < levelSize; j++) {   // 逐个让当前层的节点出列
      const curStr = res.shift()            // 出列
      const letters = map[digits[i]]
      for (const letter of letters) {
        res.push(curStr + letter)          // 生成新的字母串入列
      }
    }
  }
  return res
}
// @lc code=end

