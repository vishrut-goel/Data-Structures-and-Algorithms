class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        let tail = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = tail.prev;
            this.tail.next = null;
            tail.prev = null;
        }

        this.length--;
        return tail;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        let temp = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }

        this.length--;
        return temp;
    }

    unshift(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index < this.length / 2) {
            let current = this.head;
            let counter = 0;
            while (index !== counter) {
                current = current.next;
                counter++;
            }
            return current;
        }
        if (index >= this.length / 2) {
            let current = this.tail;
            let counter = this.length - 1;
            while (index !== counter) {
                current = current.prev;
                counter--;
            }
            return current;
        }
    }

    set(index, value) {
        let replacedNode = this.get(index);

        if (replacedNode) {
            replacedNode.val = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        let newNode = new Node(value);

        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);

        let insertPos = this.get(index - 1);
        let temp = insertPos.next;
        insertPos.next = newNode;
        newNode.prev = insertPos;
        newNode.next = temp;
        temp.prev = newNode;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let removedNode = this.get(index);
        let prevToRemove = removedNode.prev;
        let nextToRemove = removedNode.next;

        removedNode.prev = null, removedNode.next = null;
        prevToRemove.next = nextToRemove, nextToRemove.prev = prevToRemove;

        this.length--;
        return removedNode;
    }
}

let instance = new DoublyLinkedList();

instance.push(11);
instance.push(1);
instance.push(7);
instance.unshift(10);
instance.unshift(16);
instance.unshift(3);
instance.unshift(5);
console.log(instance.remove(6));
console.log(instance);
