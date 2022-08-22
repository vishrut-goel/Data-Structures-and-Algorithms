class MaxBinaryHeap {

    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(val) {
        this.values.push(val);

        let childIndex = this.values.length - 1;
        let parentIndex = Math.floor((childIndex - 1) / 2);

        while (this.values[parentIndex] < this.values[childIndex]) {
            let temp = this.values[childIndex];
            this.values[childIndex] = this.values[parentIndex];
            this.values[parentIndex] = temp;
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex - 1) / 2);
        }
        return this.values;
    }

    extractMax() {

        this.values.shift();

        if (this.values.length > 0) {

            let end = this.values.pop()
            this.values.unshift(end);

            let idx = 0;
            let childIdx = this.values.indexOf(Math.max(this.values[2 * idx + 1], this.values[2 * idx + 2]));

            while (this.values[idx] < this.values[childIdx]) {
                let temp = this.values[idx];
                this.values[idx] = this.values[childIdx];
                this.values[childIdx] = temp;
                idx = childIdx;
                childIdx = this.values.indexOf(Math.max(this.values[2 * idx + 1], this.values[2 * idx + 2]));
            }
        }
        return this.values;
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
heap.insert(45);
console.log(heap.insert(199));
console.log('NEW');
console.log(heap.extractMax());
console.log('NEW');
console.log(heap.extractMax());
console.log('NEW');
console.log(heap.extractMax());
console.log('NEW');
console.log(heap.extractMax());



