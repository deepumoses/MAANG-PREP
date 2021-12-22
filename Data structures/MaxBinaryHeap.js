// Definition: A Binary tree structure where every parent node is always greater than its children
// key takeaway #1: the root node/ first element in the array is your maximum element
// key takeaway #2: for any index i in your array, the parent for node at index i will be Math.floor((i-1)/2)
// key takeaway #3: for any index i in your array, the children for node at index i will be 2n+1 for left child and 2n+2 for right child respectively.

class BinaryHeap {
    constructor() {
        this.values = [];
    }

    // extracting the max value
    extractMax() {
        // edge case
        if (this.values.length === 0) return 'There are no values to be extracted.';
        const max = this.values[0];
        
        // Max has to be removed and heap to be restructured
        // steps
        // 1: replace max with last item
        // 2: remove last item
        this.values[0] = this.values.pop();
        this.bubbleDown();
        return max;
    }

    // helper for extractMax
    // current max is bubbled down to its correct position
    bubbleDown() {
        // 3: bubble down process: compare first element with left and right child
          // 3.1 if (both children are lesser than our current value) return/ break the loop i.e Binary heap has been structured appropriately.
          // 3.2 if (any one of the children is greater than our current value) swap it
        // 4. repeat step 3
        console.group()
        let currentMaxIndex = 0, currentMaxValue, leftChildValue, rightChildValue, leftChildIndex, rightChildIndex;
        while (true) {
            leftChildIndex = (2*currentMaxIndex) + 1;
            rightChildIndex = (2*currentMaxIndex) + 2;
            if (!this.values[leftChildIndex] && !this.values[rightChildIndex]) break;
            currentMaxValue = this.values[currentMaxIndex];
            leftChildValue = this.values[leftChildIndex];
            rightChildValue = this.values[rightChildIndex];
            console.log({currentMaxValue});
            if (currentMaxValue > leftChildValue && currentMaxValue > rightChildValue) {
                return;
            } else {
                if (leftChildValue || rightChildValue) { 
                    let greaterChildIndex = leftChildIndex;
                    if (rightChildValue && rightChildValue > leftChildValue) {
                        greaterChildIndex = rightChildIndex;
                    }
                    this.swap(currentMaxIndex, greaterChildIndex);
                    currentMaxIndex = greaterChildIndex;
                } else {
                    return;
                }
            }
        }

        console.groupEnd()
    }

    // swap helper for bubbleDown
    swap(firstIndexToSwap, secondIndexToSwap) {
        let temp = this.values[firstIndexToSwap];
        this.values[firstIndexToSwap] = this.values[secondIndexToSwap];
        this.values[secondIndexToSwap] = temp;
    }

    // insert a value into the Binary Heap
    insert(value) {
        // push the value to the end of the array
        this.values.push(value);
        // bubbleUp = compare all parents before this value and swap if your value is greater. 
        // Why? Because its a Max Binary Heap and we cant have the values parents to be larger/greater
        this.bubbleUp();
    }

    // helper for insert
    bubbleUp() {
        let currentIndex = this.values.length - 1;
        let parentIndex = Math.floor((currentIndex-1)/2);
        while (currentIndex >= 0 && this.values[currentIndex] > this.values[parentIndex]) {
            let temp = this.values[currentIndex];
            this.values[currentIndex] = this.values[parentIndex];
            this.values[parentIndex] = temp;
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex-1)/2);
            
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
console.log('Before extracting Max');
bHeap.print();

let removedMax;
removedMax = bHeap.extractMax();
console.log('After extracting Max', removedMax);
bHeap.print();
removedMax = bHeap.extractMax();
console.log('After extracting Max', removedMax);
bHeap.print();
removedMax = bHeap.extractMax();
console.log('After extracting Max', removedMax);
bHeap.print();
removedMax = bHeap.extractMax();
console.log('After extracting Max', removedMax);
bHeap.print();
removedMax = bHeap.extractMax();
console.log('After extracting Max', removedMax);
bHeap.print();
removedMax = bHeap.extractMax();
console.log('After extracting Max', removedMax);
bHeap.print();
removedMax = bHeap.extractMax();
console.log('After extracting Max', removedMax);
bHeap.print();
removedMax = bHeap.extractMax();
console.log('After extracting Max', removedMax);
bHeap.print();
removedMax = bHeap.extractMax();
console.log('After extracting Max', removedMax);
bHeap.print();

   

