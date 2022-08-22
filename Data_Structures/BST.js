class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;

            while (true) {

                if (val === current.value) return undefined;

                if (val < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(val) {
        if (this.root === null) {
            return false;
        } else {
            let current = this.root;
            if (val === current.value) return true;

            while (val !== current.value) {
                if (val < current.value) {
                    if (current.left === null) {
                        return false;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.value) {
                    if (current.right === null) {
                        return false;
                    } else {
                        current = current.right;
                    }
                }
            }

            return true;
        }
    }

    BFS() {
        let queue = [];
        let visited = [];
        let currentNode = this.root;
        if (this.root === null) {
            return undefined;
        }

        queue.push(currentNode);

        while (queue.length) {
            currentNode = queue.shift();
            visited.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return visited;
    }

    DFSPreOrder() {
        let visited = [];
        let currentNode = this.root;

        function traverse(currentNode) {
            visited.push(currentNode.value);

            if (currentNode.left) traverse(currentNode.left);

            if (currentNode.right) traverse(currentNode.right);
        }

        traverse(currentNode);
        return visited;
    }

    DFSPostOrder() {
        let visited = [];
        let currentNode = this.root;

        function traverse(currentNode) {

            if (currentNode.left) traverse(currentNode.left);

            if (currentNode.right) traverse(currentNode.right);

            visited.push(currentNode.value);

        }

        traverse(currentNode);
        return visited;
    }

    DFSInOrder() {
        let visited = [];
        let currentNode = this.root;

        function traverse(currentNode) {

            if (currentNode.left) traverse(currentNode.left);

            visited.push(currentNode.value);

            if (currentNode.right) traverse(currentNode.right);

        }

        traverse(currentNode);
        return visited;
    }
}

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSInOrder());
// console.log(tree.find(6));
// console.log(tree.find(2));
// console.log(tree.find(9));