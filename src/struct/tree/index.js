const insertNode = (node, newNode) => {
    if(newNode.key < node.key) {
        if(node.left === null) {
            node.left = newNode;
        } else {
            insertNode(node.left, newNode);
        }
    } else {
        if(node.right === null) {
            node.right = newNode;
        } else {
            insertNode(node.right, newNode);
        }
    }
}
// 中序遍历辅助类(left-root-right)
const inOrderTraverseNode = (node, callback) => {
    if(node !== null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
    }
}
// 先序遍历辅助类(root-left-right)
const preOrderTraverseNode = (node, callback) => {
    if(node !== null) {
        callback(node.key);
        preOrderTraverseNode(node,left, callback);
        preOrderTraverseNode(node.right, callback);
    }
}
// 后序遍历辅助类(root-left-right)
const postOrderTraverseNode = (node, callback) => {
    if(node !== null) {
        postOrderTraverseNode(node,left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
    }
}

// 搜索最小值
const minNode = (node) => {
    if(node) {
        while(node && node.left !== null) {
            node = node.left;
        }
        return node.ley;
    }
    return null
}
// 搜索最大值
const maxNode = (node) => {
    if(node) {
        while(node && node.right !== null) {
            node = node.right;
        }
        return node.ley;
    }
    return null
}
// 搜索特定值
const searchNode = (node,key) => {
    if(node === null) {
        return false
    }
    if(key < node.key) {
        return searchNode(node.left, key);
    } else if(key > node.key) {
        return searchNode(node.right, key);
    } else {
        return true;
    }
}
// 移除节点
const removeNode = (node, key) => {
    if(node === null) {
        return null;
    }
    if(key < node.key){
        node.left = removeNode(node.left, key);
        return node;
    } else if(key > node.key) {
        node.right = removeNode(node.right, key);
        return node;
    } else {
        // y一一个叶节点
        if(node.left === null && node.right === null) {
            node = null;
            return node;
        }
        // 只有一个子节点的节点
        if(node.left === null) {
            node = node.right
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        } else {
            let aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    }
}
const findMinNode = (node) => {
    while(node && node.left !== null){
        node = node.left;
    }
    return node;
}
// 二叉搜索树（left<root<right）
export default class SearchTree {
    constructor() {
        this.root = null
    }

    Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    min() {
        return minNode(this.root);
    }
    max() {
        return maxNode(this.root);
    }
    search(key) {
        return searchNode(this.root, key);
    }


    insert(key) {
        const newNode = new this.Node(key);
        if(this.root === null) {
            this.root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }

    remove(key) {
        this.root = removeNode(this.root, key);
    }

    // 中序遍历（root-left-right）
    inOrderTraverse(callback) {
        inOrderTraverseNode(this.root, callback);
    }

    preOrderTraverse(callback) {
        preOrderTraverseNode(this.root, callback);
    }

    postOrderTraverse(callback) {
        postOrderTraverseNode(this.root, callback);
    }
}