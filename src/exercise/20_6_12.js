//两数求和
/**
 * 
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 */

const nums = [2, 7, 11, 15]
const target = 9

// const twoSum = (nums, target) => {
// 	// 这里我用对象来模拟 map 的能力
// 	const diffs = {}
// 	// 缓存数组长度
// 	const len = nums.length
// 	// 遍历数组
// 	for (let i = 0; i < len; i++) {
// 		// 判断当前值对应的 target 差值是否存在（是否已遍历过）
// 		if (diffs[target - nums[i]] !== undefined) {
// 			// 若有对应差值，那么答案get！
// 			return [diffs[target - nums[i]], i]
// 		}
// 		// 若没有对应差值，则记录当前值
// 		diffs[nums[i]] = i
// 	}
// }

const twoSum = (nums, target) => {
	const diffs = new Map()
	const len = nums.length
	for (let i = 0; i < len; i++) {
		if (diffs.get(target - nums[i]) !== undefined) {
			return [diffs.get(target - nums[i]), i]
		}
		diffs.set(nums[i], i)
	}
}

// console.log(twoSum(nums, target))

//合并两个有序数组
/*
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
*/

const nums1 = [1, 2, 3, 0, 0, 0, 0],
	m = 3
const nums2 = [0, 1, 3, 6],
	n = 4

const merge = (nums1, m, nums2, n) => {
	// 初始化两个指针的指向，初始化 nums1 尾部索引 k
	let i = m - 1,
		j = n - 1,
		k = m + n - 1
	// 当两个数组都没遍历完时，指针同步移动
	while (i >= 0 && j >= 0) {
		// 取较大的值，从末尾往前填补
		if (nums1[i] >= nums2[j]) {
			nums1[k] = nums1[i]
			i--
			k--
		} else {
			nums1[k] = nums2[j]
			j--
			k--
		}
	}

	// nums2 留下的情况，特殊处理一下
	while (j >= 0) {
		nums1[k] = nums2[j]
		k--
		j--
	}
}
// console.log(nums1)

const merge_JS = function (nums1, m, nums2, n) {
	nums1.splice(m)
  nums2.splice(n)
	return [...nums1, ...nums2].sort((a, b) => a - b)
}

console.log(merge_JS(nums1, m, nums2, n))


