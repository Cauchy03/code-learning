var subarraySum = function (nums, k) {
  let count = 0
  let map = new Map()
  // 保存当前位置的前缀和
  let prevfixSum = 0
  // 前缀和存储到map中
  map.set(0, 1)

  for (let i = 0; i < nums.length; i++) {
    prevfixSum += nums[i]
    // 比较历史前缀和 如果存在count 直接加
    if (map.has(prevfixSum - k)) {
      count += map.get(prevfixSum - k)
    }

    // 统计前缀和出现次数
    if (map.has(prevfixSum)) {
      map.set(prevfixSum, map.get(prevfixSum)++)
    } else {
      map.set(prevfixSum, 1)
    }

  }

  return count
}

console.log(subarraySum([1,2,3,1,1],2))