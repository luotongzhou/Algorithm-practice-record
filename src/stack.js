//栈
//数组模拟栈，后进先出(LIFO，Last In First Out)
/**
只允许从尾部添加元素
只允许从尾部取出元素
对应到数组的方法，刚好就是 push 和 pop。因此，我们可以认为在 JavaScript 中，栈就是限制只能用 push 来添加元素，同时只能用 pop 来移除元素的一种特殊的数组。
 */

// 初始状态，栈空
const stack = []
// 入栈过程
stack.push('东北大板')
stack.push('可爱多')
stack.push('巧乐兹')
stack.push('冰工厂')
stack.push('光明奶砖')

// 出栈过程，栈不为空时才执行
while (stack.length) {
	// 单纯访问栈顶元素（不出栈）
	const top = stack[stack.length - 1]
	console.log('现在取出的冰淇淋是', top)
	// 将栈顶元素出栈
	stack.pop()
}

// 栈空
stack // []
