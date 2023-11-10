class Node {

    constructor(data) {
        this.data = data; //значение узла
        this.left = null; //левый дочерний узел
        this.right = null; //правый дочений узел
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null; // bst root
    }


    insert(data) {
        const node = new Node(data);
        if (this.root) {
            this.insertNode(this.root, node);
        } else {
            this.root = node;
        }
    }


    insertNode(node, newNode) {
        if (node.data > newNode.data) {
            node.left ? this.insertNode(node.left, newNode) : node.left = newNode;
        } else {
            node.right ? this.insertNode(node.right, newNode) : node.right = newNode;
        }
    }


    inOrderTraverse(node, callback) {
        if (node) {
            this.inOrderTraverse(node.left, callback);
            callback(node.data);
            this.inOrderTraverse(node.right, callback);
        }
    }


    preOrderTraverse(node, callback) {
        if (node) {
            callback(node.data);
            this.preOrderTraverse(node.left, callback);
            this.preOrderTraverse(node.right, callback);
        }
    }

    postOrderTraverse(node, callback) {
        if (node) {
            this.postOrderTraverse(node.left, callback);
            this.postOrderTraverse(node.right, callback);
            callback(node.data);
        }
    }

    search(node, data) {
        if (node) {
            if (node.data > data) {
                return this.search(node.left, data);
            } else if (node.data < data) {
                return this.search(node.right, data);
            } else {
                return node;
            }
        }
        return null;
    }


    findMinNode(node) {
        return node.left ? this.findMinNode(node.left) : node;
    }


    remove(data) {
        this.root = this.removeNode(this.root, data);
    }


    removeNode(node, data) {
        if (node) {
            if (node.data > data) {
                node.left = this.removeNode(node.left, data);
                return node;
            } else if (node.data < data) {
                node.right = this.removeNode(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return this.removeLeafNode(node);
                }

                if (!node.left) {
                    return this.removeNodeWithoutLeftChild(node);
                } else if (!node.right) {
                    return this.removeNodeWithoutRightChild(node);
                }

                return this.removeNodeWithTwoChildren(node);
            }
        } else {
            return null;
        }
    }


    removeNodeWithTwoChildren(node) {
        const newNode = this.findMinNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }


    removeNodeWithoutLeftChild(node) {
        node = node.right;
        return node;
    }


    removeNodeWithoutRightChild(node) {
        node = node.left;
        return node;
    }

    removeLeafNode(node) {
        node = null;
        return node;
    }
}


const BST = new BinarySearchTree();
BST.insert(15);
BST.insert(14);
BST.insert(294);
BST.insert(13);
BST.insert(363);
BST.insert(5);
BST.insert(8);
BST.insert(7);
const searchedNode = BST.search(BST.root, 8);

console.log('Проверка работы прямого обхода:');
BST.inOrderTraverse(BST.root, (item) => console.log(item));

console.log('\nПроверка работы симметричного обхода:');
BST.preOrderTraverse(BST.root, (item) => console.log(item));

BST.remove(13);
console.log('\nПроверка работы обхода в обратном порядке:');
BST.postOrderTraverse(BST.root, (item) => console.log(item));