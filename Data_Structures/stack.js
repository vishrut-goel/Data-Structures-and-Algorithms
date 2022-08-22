class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        }

        else {
            let temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }

        return ++this.size;
    }

    pop() {
        if (!this.size) return null;

        let temp = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        }

        else {
            this.first = temp.next;
            temp.next = null;
        }

        this.size--;
        return temp;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);

console.log(stack.pop());
console.log(stack.pop());