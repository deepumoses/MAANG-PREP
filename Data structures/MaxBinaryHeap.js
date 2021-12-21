// Definition: A Binary tree structure where every parent node is always greater than its children
// key takeaway #1: the root node/ first element in the array is your maximum element
// key takeaway #2: for any index i in your array, the parent for node at index i will be Math.floor((i-1)/2)
// key takeaway #3: for any index i in your array, the children for node at index i will be 2n+1 for left child and 2n+2 for right child respectively.

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

   

