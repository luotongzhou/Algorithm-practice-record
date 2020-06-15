//环形链表基本问题——如何判断链表是否成环？
//给定一个链表，判断链表中是否有环。
// 入参是头结点
function ListNode(val) {
	this.val = val
	this.next = null
}
const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(3)
const d = new ListNode(4)
const e = new ListNode(5)
a.next = b
b.next = c
c.next = d
d.next = e
e.next = c
const hasCycle = function (head) {
	// 只要结点存在，那么就继续遍历
	while (head) {
		// 如果 flag 已经立过了，那么说明环存在
		if (head.flag) {
			return true
		} else {
			// 如果 flag 没立过，就立一个 flag 再往下走
			head.flag = true
			head = head.next
		}
	}
	return false
}

//环形链表衍生问题——定位环的起点
//给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。

const detectCycle = function (head) {
	while (head) {
		if (head.flag) {
			return head
		} else {
			head.flag = true
			head = head.next
		}
	}
	return null
}

const _detectCycle = head => {
	let slow = head
	let fast = head
	while (fast && fast.next) {
		slow = slow.next
		fast = fast.next.next
		if (fast === slow) {
			// 带环的情况
			// cur 从链表头部出发，slow 从 fast 与 slow 的相遇点出发
			let cur = head
			while (cur !== slow) {
				cur = cur.next
				slow = slow.next
			}
			// 这个位置就是环的入口
			return cur
		}
	}
	return null
}

console.log(_detectCycle(a))
