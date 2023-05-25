/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// let hash = {};
// for (let i = 0; i < nums.length; i++) {
//   if (hash[target - nums[i]] !== undefined) {
//     return [i, hash[target - nums[i]]];
//   }
//   hash[nums[i]] = i;
// }
// return [];


var twoSum = function(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
    console.log(map);
  }
  return []
};
// @lc code=end

