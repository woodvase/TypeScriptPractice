export interface PiorityQueueNode<T> {
    key: number;
    value: T;
}

export class PiorityQueue<T> {
    private heap: PiorityQueueNode<T>[] = [];
    private parent = (index: number) => Math.floor((index - 1) / 2)
    private left = (index: number) => 2 * index + 1
    private right = (index: number) => 2 * index + 2
    private hasLeft = (index: number) => this.left(index) < this.heap.length
    private hasRight = (index: number) => this.right(index) < this.heap.length
    private swap = (a: number, b: number) => {
        const tmp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = tmp
    }

    public isEmpty (): boolean {
        return this.heap.length == 0;
    }

    public peek (): T | undefined {
        if (this.isEmpty()) return undefined;
        return this.heap[0].value
    }

    public size (): number {
        return this.heap.length
    }

    public insert (n: PiorityQueueNode<T>) {
        this.heap.push(n)
        let i = this.heap.length - 1;
        while (i > 0) {
            const p = this.parent(i);
            if (this.heap[p].key > this.heap[i].key) {
                this.swap(p, i)
                i = p;
            } else {
                break;
            }
        }
    }

    public pop (): PiorityQueueNode<T> | undefined {
        if (this.isEmpty()) return undefined;
        this.swap(0, this.heap.length - 1);
        const r = this.heap.pop()
        let i = 0;
        while (this.hasLeft(i)) {
            let smallest = i;
            const l = this.left(i);
            if (this.heap[smallest].key > this.heap[l].key) {
                smallest = l;
            }
            if (this.hasRight(i)) {
                const r = this.right(i);
                if (this.heap[smallest].key > this.heap[r].key) {
                    smallest = r;
                }
            }
            if (smallest !== i) {
                this.swap(i, smallest)
                i = smallest;
            } else {
                break;
            }
        }

        return r;
    }
}


const pq = new PiorityQueue<number>()
const a = [[7, 6], [2, 1], [5, 4]];
a.forEach(x => pq.insert({ key: x[0], value: x[1] }))
console.log(pq.pop())
pq.insert({ key: 3, value: 2 });
pq.insert({ key: 3, value: 3 });
console.log(pq.pop())
pq.insert({ key: 1, value: 5 });
console.log(pq.pop())
