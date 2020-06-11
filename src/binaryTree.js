/** 
 * 二叉树是指满足以下要求的树：
它可以没有根结点，作为一棵空树存在
如果它不是空树，那么必须由根结点、左子树和右子树组成，且左右子树都是二叉树

注意，二叉树不能被简单定义为每个结点的度都是2的树。普通的树并不会区分左子树和右子树，但在二叉树中，左右子树的位置是严格约定、不能交换的
*/

// 二叉树结点的构造函数
function TreeNode(val) {
	this.val = val
	this.left = this.right = null
}
const node = new TreeNode(1)

//所谓的“先序”、“中序”和“后序”，“先”、“中”、“后”其实就是指根结点的遍历时机

const root = {
	val: 'A',
	left: {
		val: 'B',
		left: {
			val: 'D'
		},
		right: {
			val: 'E'
		}
	},
	right: {
		val: 'C',
		right: {
			val: 'F'
		}
	}
}

/* 
编写一个递归函数之前，大家首先要明确两样东西：

递归式
递归边界

递归式，它指的是你每一次重复的内容是什么。在这里，我们要做先序遍历，那么每一次重复的其实就是 根结点 -> 左子树 -> 右子树 这个旅行路线。

递归边界，它指的是你什么时候停下来。
在遍历的场景下，当我们发现遍历的目标树为空的时候，就意味着旅途已达终点、需要画上句号了。这个“画句号”的方式，在编码实现里对应着一个 return 语句——这就是二叉树遍历的递归边界。
*/

//先序遍历
// 所有遍历函数的入参都是树的根结点对象
function preorder(root) {
  // 递归边界，root 为空
  if(!root) {
      return 
  }
   
  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val)  
  // 递归遍历左子树 
  preorder(root.left)  
  // 递归遍历右子树  
  preorder(root.right)
}

//中序遍历
// 所有遍历函数的入参都是树的根结点对象
function inorder(root) {
  // 递归边界，root 为空
  if(!root) {
      return 
  }
   
  // 递归遍历左子树 
  inorder(root.left)  
  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val)  
  // 递归遍历右子树  
  inorder(root.right)
}

//后序遍历
function postorder(root) {
  // 递归边界，root 为空
  if(!root) {
      return 
  }
   
  // 递归遍历左子树 
  postorder(root.left)  
  // 递归遍历右子树  
  postorder(root.right)
  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val)  
}

console.log(postorder(root))