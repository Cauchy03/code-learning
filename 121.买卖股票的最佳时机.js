/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0] // 记录当前最低价
  let maxProfit = 0 // 记录当前最大利润
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice
    }

    // minPrice = Math.min(prices[i], minPrice)
    // maxProfit = Math.max(maxProfit, prices[i] - minPrice)
  }

  return maxProfit
}
// @lc code=end

