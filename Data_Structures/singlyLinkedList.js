class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.length) {
            return undefined;
        }
        let current = this.head;
        let prevNode = current;
        while (current.next) {
            prevNode = current;
            current = current.next;
        }

        prevNode.next = null;
        this.tail = prevNode;
        this.length--;

        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.length) {
            return undefined;
        }

        let current = this.head;
        this.head = current.next;
        current.next = null;
        this.length--;
        if (!this.length) {
            this.tail = null;
        }
        return current;
    }

    unshift(val) {

        let newNode = new Node(val);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head;
        let counter = 0;
        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set(val, index) {

        let value = this.get(index);
        if (value) {
            value.val = val;
            return true;
        }
        return false;

    }

    insert(index, val) {

        let newNode = new Node(val);

        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        let prevNode = this.head;
        let current = prevNode.next;
        let counter = 0;
        while (counter !== index - 1) {
            prevNode = prevNode.next;
            current = current.next;
            counter++;
        }

        newNode.next = current;
        prevNode.next = newNode;
        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let value = this.get(index - 1);
        let removedNode = value.next;
        value.next = removedNode.next;
        this.length--;
        return removedNode;

    }

    reverse() {
        if (this.length === 1) return this;
        if (this.length === 2) {
            let temp = this.head;
            this.head = this.tail;
            this.tail = temp;

            return this;
        }

        let temp = this.head;
        let tempNext = temp.next;
        this.head = this.tail;
        this.tail = temp;


        while (!tempNext) {
            tempNext.next = temp;
            tempNext = tempNext.next;
            temp = temp.next;
        }

        return this;
    }
}

let instance = new SinglyLinkedList();

instance.push(11);
//instance.push(10);
// console.log(instance);
//instance.push(14);
//console.log(instance);
instance.push(2);
//console.log(instance);
instance.push(9);
instance.push(8);
//console.log(instance);
// console.log(instance.pop());
// console.log(instance.pop());
// console.log(instance.pop());
// console.log(instance.pop());
// console.log(instance.pop());

// console.log(instance.unshift(1));
// console.log(instance);
// console.log(instance.unshift(24));

// console.log(instance);

console.log(instance.reverse());
//console.log(instance);