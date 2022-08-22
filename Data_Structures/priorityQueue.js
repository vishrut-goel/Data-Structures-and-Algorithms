class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {

    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {

        let node = new Node(val, priority);
        this.values.push(node);
        let childIndex = this.values.length - 1;
        let parentIndex = Math.floor((childIndex - 1) / 2);

        while ( childIndex > 0 && (this.values[parentIndex].priority > this.values[childIndex].priority)) {
            let temp = this.values[childIndex];
            this.values[childIndex] = this.values[parentIndex];
            this.values[parentIndex] = temp;
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex - 1) / 2);
        }
        return this.values;
    }

    dequeue() {

        this.values.shift();

        if (this.values.length > 0) {

            let end = this.values.pop()
            this.values.unshift(end);

            let idx = 0;
            let childIdx = this.values.indexOf(Math.min(this.values[2 * idx + 1].priority, this.values[2 * idx + 2].priority));

            while (this.values[idx].priority > this.values[childIdx].priority) {
                let temp = this.values[idx];
                this.values[idx] = this.values[childIdx];
                this.values[childIdx] = temp;
                idx = childIdx;
                childIdx = this.values.indexOf(Math.max(this.values[2 * idx + 1].priority, this.values[2 * idx + 2].priority));
            }
        }
        return this.values;
    }
}

let heap = new PriorityQueue();
heap.enqueue(55, 3);
heap.enqueue(1, 1);
heap.enqueue(45, 2);
console.log(heap.enqueue(199, 4));
console.log(heap.dequeue(199, 4));