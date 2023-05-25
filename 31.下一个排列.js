/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2 // 从右向左遍历，i从倒数第二开始是为了nums[i+1]要存在
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    // 寻找第一个小于右邻居的数
    i--
  }
  if (i >= 0) {
    // 这个数在数组中存在，从它身后挑一个数也就是第一个比它大的数，进行交换
    let j = nums.length - 1 // 从最后一项，向左遍历
    while (j >= 0 && nums[j] <= nums[i]) {
      // 寻找第一个大于 nums[i] 的数
      j--
    }
    // 数组结构赋值，实现交换
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  // 如果 i = -1，说明是递减排列，如 3 2 1，没有下一排列，直接翻转为最小排列：1 2 3
  let l = i + 1
  let r = nums.length - 1
  while (l < r) {
    // i 右边的数进行翻转，使得变大的幅度小一些
    [nums[l], nums[r]] = [nums[r], nums[l]]
    l++
    r--
  }
};
// @lc code=end
