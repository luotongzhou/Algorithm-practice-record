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

// console.log(merge_JS(nums1, m, nums2, n))

//三数求和
/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组
 */

//双指针法用在涉及求和、比大小类的数组题目里时，大前提往往是：该数组必须有序。否则双指针根本无法帮助我们缩小定位的范围，压根没有意义。因此这道题的第一步是将数组排序：

const nums3 = [-1, 0, 1, 2, -1, -4]

const threeSum = function (nums) {
	// 用于存放结果数组
	let res = []
	// 目标值为0
	let sum = 0
	// 给 nums 排序
	nums = nums.sort((a, b) => {
		return a - b
	})
	// 缓存数组长度
	const len = nums.length
	// 注意我们遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
	for (let i = 0; i < len - 2; i++) {
		// 左指针 j
		let j = i + 1
		// 右指针k
		let k = len - 1
		// 如果遇到重复的数字，则跳过
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue
		}
		while (j < k) {
			// 三数之和小于0，左指针前进
			if (nums[i] + nums[j] + nums[k] < sum) {
				j++
				// 处理左指针元素重复的情况
				while (j < k && nums[j] === nums[j - 1]) {
					j++
				}
			} else if (nums[i] + nums[j] + nums[k] > sum) {
				// 三数之和大于0，右指针后退
				k--

				// 处理右指针元素重复的情况
				while (j < k && nums[k] === nums[k + 1]) {
					k--
				}
			} else {
				// 得到目标数字组合，推入结果数组
				res.push([nums[i], nums[j], nums[k]])

				// 左右指针一起前进
				j++
				k--

				// 若左指针元素重复，跳过
				while (j < k && nums[j] === nums[j - 1]) {
					j++
				}

				// 若右指针元素重复，跳过
				while (j < k && nums[k] === nums[k + 1]) {
					k--
				}
			}
		}
	}

	// 返回结果数组
	return res
}

console.log(threeSum(nums3))

/** 
 * 双指针法中的“对撞指针”法
在上面这道题中，左右指针一起从两边往中间位置相互迫近，这样的特殊双指针形态，被称为“对撞指针”。

什么时候你需要联想到对撞指针？
这里我给大家两个关键字——“有序”和“数组”。
没错，见到这两个关键字，立刻把双指针法调度进你的大脑内存。普通双指针走不通，立刻想对撞指针！

即便数组题目中并没有直接给出“有序”这个关键条件，我们在发觉普通思路走不下去的时候，也应该及时地尝试手动对其进行排序试试看有没有新的切入点——没有条件，创造条件也要上。

对撞指针可以帮助我们缩小问题的范围，这一点在“三数求和”问题中体现得淋漓尽致：因为数组有序，所以我们可以用两个指针“画地为牢”圈出一个范围，这个范围以外的值不是太大就是太小、
直接被排除在我们的判断逻辑之外，这样我们就可以把时间花在真正有意义的计算和对比上。如此一来，不仅节省了计算的时间，更降低了问题本身的复杂度，我们做题的速度也会大大加快。
*/