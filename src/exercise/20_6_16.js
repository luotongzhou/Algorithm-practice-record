//栈与队列
//“有效括号”问题
//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效

// 用一个 map 来维护左括号和右括号的对应关系
const leftToRight = {
	'(': ')',
	'[': ']',
	'{': '}'
}
const isValid = function (s) {
	// 结合题意，空字符串无条件判断为 true
	if (!s) {
		return true
	}
	// 初始化 stack 数组
	const stack = []
	// 缓存字符串长度
	const len = s.length
	// 遍历字符串
	for (let i = 0; i < len; i++) {
		// 缓存单个字符
		const ch = s[i]
		// 判断是否是左括号，这里我为了实现加速，没有用数组的 includes 方法，直接手写判断逻辑
		if (ch === '(' || ch === '{' || ch === '[') stack.push(leftToRight[ch])
		// 若不是左括号，则必须是和栈顶的左括号相配对的右括号
		else {
			// 若栈不为空，且栈顶的左括号没有和当前字符匹配上，那么判为无效
			if (!stack.length || stack.pop() !== ch) {
				return false
			}
		}
	}
	// 若所有的括号都能配对成功，那么最后栈应该是空的
	return !stack.length
}

//栈问题进阶-每日温度问题
//根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。
const T = [73, 74, 75, 71, 69, 72, 76, 73]
// 入参是温度数组
const dailyTemperatures = function (T) {
	const len = T.length // 缓存数组的长度
	const stack = [] // 初始化一个栈
	const res = new Array(len).fill(0) //  初始化结果数组，注意数组定长，占位为0
	for (let i = 0; i < len; i++) {
		// 若栈不为0，且存在打破递减趋势的温度值
		while (stack.length && T[i] > T[stack[stack.length - 1]]) {
			// 将栈顶温度值对应的索引出栈
			const top = stack.pop()
			// 计算 当前栈顶温度值与第一个高于它的温度值 的索引差值
			res[top] = i - top
		}
		// 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
		stack.push(i)
	}
	// 返回结果数组
	return res
}
console.log(dailyTemperatures(T))