class HashTable {
    constructor(size = 4) {
        this.keyMap = new Array(size);
    }

    __hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        let hash = this.__hash(key);

        if (!this.keyMap[hash]) {
            this.keyMap[hash] = new Array();
            this.keyMap[hash].push([key, value]);
        } else {
            this.keyMap[hash].push([key, value]);
        }

        return this.keyMap;
    }

    get(key){
        let hash = this.__hash(key);

        if (!this.keyMap[hash]) {
            return undefined;
        }

        let flatArr = this.keyMap[hash].flat();

        if(flatArr.includes(key)){
            return flatArr[flatArr.indexOf(key) + 1];
        } else{
            return false;
        }
        
    }
}

let hashTable = new HashTable();

hashTable.set('pink', '#23442');
hashTable.set('cyan', '#23342');
hashTable.set('orangered', '#23421');
hashTable.set('yellow', '#23498');
hashTable.set('red', '#23476');
hashTable.set('maroon', '#23432');
hashTable.set('hi', '#again');
console.log(hashTable.set('french', 'fries'));
console.log(hashTable.get('orangered'));




