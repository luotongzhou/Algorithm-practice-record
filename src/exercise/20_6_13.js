//链表的合并
//将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。

const mergeTwoLists = function (l1, l2) {
	// 定义头结点，确保链表可以被访问到
	let head = new ListNode()
	// cur 这里就是咱们那根“针”
	let cur = head
	// “针”开始在 l1 和 l2 间穿梭了
	while (l1 && l2) {
		// 如果 l1 的结点值较小
		if (l1.val <= l2.val) {
			// 先串起 l1 的结点
			cur.next = l1
			// l1 指针向前一步
			l1 = l1.next
		} else {
			// l2 较小时，串起 l2 结点
			cur.next = l2
			// l2 向前一步
			l2 = l2.next
		}

		// “针”在串起一个结点后，也会往前一步
		cur = cur.next
	}

	// 处理链表不等长的情况
	cur.next = l1 !== null ? l1 : l2
	// 返回起始结点
	return head.next
}

//给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

const a = {
	val: 1,
	next: {
		val: 1,
		next: {
			val: 2,
			next: {
				val: 2,
				next: {
					val: 3,
					next: null
				}
			}
		}
	}
}

const deleteDuplicates = function (head) {
	// 设定 cur 指针，初始位置为链表第一个结点
	let cur = head
	// 遍历链表
	while (cur != null && cur.next != null) {
		// 若当前结点和它后面一个结点值相等（重复）
		if (cur.val === cur.next.val) {
			// 删除靠后的那个结点（去重）
			cur.next = cur.next.next
		} else {
			// 若不重复，继续遍历
			cur = cur.next
		}
		console.log('cur', cur)
		console.log('head', head)
	}
	return head
}

console.log(deleteDuplicates(a))
