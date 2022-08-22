class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);

        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        }

        else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    dequeue() {

        if (!this.size) {
            return null;
        }

        let temp = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = temp.next;
            temp.next = null;
        }

        this.size--;
        return temp.val;

    }
}

let stack = new Queue();
stack.enqueue(1);
stack.enqueue(2);
stack.enqueue(3);

console.log(stack);

console.log(stack.dequeue());
console.log(stack.dequeue());