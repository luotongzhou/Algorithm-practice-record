//链表
// 链表和数组相似，它们都是有序的列表、都是线性结构（有且仅有一个前驱、有且仅有一个后继）。不同点在于，链表中，数据单位的名称叫做“结点”，而结点和结点的分布，在内存中可以是离散的。
//在链表中，每一个结点的结构都包括了两部分的内容：数据域和指针域。JS 中的链表，是以嵌套的对象的形式来实现的
/**
 * 
{
    // 数据域
    val: 1,
    // 指针域，指向下一个结点
    next: {
        val:2,
        next: ...
    }
} 
 */

//数据域存储的是当前结点所存储的数据值，而指针域则代表下一个结点（后继结点）的引用。 有了 next 指针来记录后继结点的引用
//创建链表
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node1 = new ListNode(1)  
const node2 = new ListNode(2)
node1.next = node2

//添加结点
// 如果目标结点本来不存在，那么记得手动创建
const node3 = new ListNode(3)     
// 把node3的 next 指针指向 node2（即 node1.next）
node3.next = node1.next
// 把node1的 next 指针指向 node3
node1.next = node3

//删除结点
//在涉及链表删除操作的题目中，重点不是定位目标结点，而是定位目标结点的前驱结点。做题时，完全可以只使用一个指针（引用），这个指针用来定位目标结点的前驱结点
node1.next = node3.next 
console.log(node1)

//相对于数组来说，链表有一个明显的优点，就是添加和删除元素都不需要挪动多余的元素