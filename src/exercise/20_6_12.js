//给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
//字符串题干中若有“回文”关键字，那么做题时脑海中一定要冒出两个关键字——对称性 和 双指针。这两个工具一起上，足以解决大部分的回文字符串衍生问题。

const string = 'abcdba'
const validPalindrome = function (s) {
	// 缓存字符串的长度
	const len = s.length

	// i、j分别为左右指针
	let i = 0,
		j = len - 1

	// 当左右指针均满足对称时，一起向中间前进
	while (i < j && s[i] === s[j]) {
		i++
		j--
	}

	// 尝试判断跳过左指针元素后字符串是否回文
	if (isPalindrome(i + 1, j)) {
		return true
	}
	// 尝试判断跳过右指针元素后字符串是否回文
	if (isPalindrome(i, j - 1)) {
		return true
	}

	// 工具方法，用于判断字符串是否回文
	function isPalindrome(st, ed) {
		while (st < ed) {
			if (s[st] !== s[ed]) {
				return false
			}
			st++
			ed--
		}
		return true
	}

	// 默认返回 false
	return false
}

// console.log(validPalindrome(string))

/** 
 * 
 * 设计一个支持以下两种操作的数据结构：
void addWord(word)
bool search(word)
search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
. 可以表示任何一个字母。
*/

/**
 * 构造函数
 */
const WordDictionary = function () {
	// 初始化一个对象字面量，承担 Map 的角色
	this.words = {}
}

/**
  添加字符串的方法
 */
WordDictionary.prototype.addWord = function (word) {
	// 若该字符串对应长度的数组已经存在，则只做添加
	if (this.words[word.length]) {
		this.words[word.length].push(word)
	} else {
		// 若该字符串对应长度的数组还不存在，则先创建
		this.words[word.length] = [word]
	}
}

/**
  搜索方法
 */
WordDictionary.prototype.search = function (word) {
	// 若该字符串长度在 Map 中对应的数组根本不存在，则可判断该字符串不存在
	if (!this.words[word.length]) {
		return false
	}
	// 缓存目标字符串的长度
	const len = word.length
	// 如果字符串中不包含‘.’，那么一定是普通字符串
	if (!word.includes('.')) {
		// 定位到和目标字符串长度一致的字符串数组，在其中查找是否存在该字符串
		return this.words[len].includes(word)
	}

	// 否则是正则表达式，要先创建正则表达式对象
	const reg = new RegExp(word)

	// 只要数组中有一个匹配正则表达式的字符串，就返回true
	return this.words[len].some(item => {
		return reg.test(item)
	})
}

/** 
 * 请你来实现一个 atoi 函数，使其能将字符串转换成整数。
首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。
当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。
该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。
注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。
在任何情况下，若函数不能进行有效的转换时，请返回 0。
*/
//说明： 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−2^31,  2^31 − 1]。如果数值超过这个范围，请返回  INT_MAX (2^31 − 1) 或 INT_MIN (−2^31) 。

const myAtoi = function (str) {
	// 编写正则表达式
	const reg = /\s*([-\+]?[0-9]*).*/
	// 得到捕获组
	const groups = str.match(reg)
	// 计算最大值
	const max = Math.pow(2, 31) - 1
	// 计算最小值
	const min = -max - 1
	// targetNum 用于存储转化出来的数字
	let targetNum = 0
	// 如果匹配成功
	if (groups) {
		// 尝试转化捕获到的结构
		targetNum = +groups[1]
		// 注意，即便成功，也可能出现非数字的情况，比如单一个'+'
		if (isNaN(targetNum)) {
			// 不能进行有效的转换时，请返回 0
			targetNum = 0
		}
	}
	// 卡口判断
	if (targetNum > max) {
		return max
	} else if (targetNum < min) {
		return min
	}
	// 返回转换结果
	return targetNum
}

console.log(myAtoi('  +b10086aaa'))