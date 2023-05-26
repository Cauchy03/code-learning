/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// solution one 使用 API
// var findPeakElement = function(nums) {
  // return nums.indexOf(Math.max(...nums));
// }

var findPeakElement = function(nums) {
  let start = 0
  let end = nums.length - 1

  while(start < end){
    const mid = start + ((end-start) >> 1)
    if(nums[mid] > nums[mid + 1]){
      end = mid
    }else {
      //  mid必须+1 缩小区间 不然出现死循环
      start = mid + 1 
    }
  }
  return end
}
// @lc code=end

