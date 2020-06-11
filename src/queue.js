//队列（Queue）——只用 push 和 shift 完成增删的“数组”
//一种先进先出（FIFO，First In First Out）的数据结构
//有点像排队买东西
/**
只允许从尾部添加元素
只允许从头部移除元素
*/

const queue = []  
queue.push('小册一姐')
queue.push('小册二姐')
queue.push('小册三姐')  
  
while(queue.length) {
    // 单纯访问队头元素（不出队）
    const top = queue[0]
    console.log(top,'取餐')
    // 将队头元素出队
    queue.shift()
}

// 队空
queue // []
