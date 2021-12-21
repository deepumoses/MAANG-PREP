class BinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let i = this.values.length - 1;
        let parentIndex = Math.floor((i-1)/2);
        while (i >= 0 && this.values[i] > this.values[parentIndex]) {
            let temp = this.values[i];
            this.values[i] = this.values[parentIndex];
            this.values[parentIndex] = temp;
            i = parentIndex;
            parentIndex = Math.floor((i-1)/2);
            
        }
    }

    print() {
        console.log(this.values)
    }
}

const bHeap = new BinaryHeap();
bHeap.insert(10);
bHeap.insert(100);
bHeap.insert(20);
bHeap.insert(40);
bHeap.insert(400);
bHeap.insert(402);
bHeap.insert(409);
bHeap.insert(1);
bHeap.print();

   

