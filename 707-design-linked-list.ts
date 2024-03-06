import { ListNode } from "./SingleLinkedNode";

class MyLinkedList {
    private head: ListNode
    constructor() {
        this.head = new ListNode()
    }

    get (index: number): number {
        let cur: ListNode | null = this.head
        let c = index
        while (c >= 0 && cur !== null) {
            cur = cur.next
            c -= 1;
        }

        if (c > 0) return -1
        return cur !== null ? cur.val : -1
    }

    addAtHead (val: number): void {
        const newNode = new ListNode(val, this.head.next)
        this.head.next = newNode;
    }

    addAtTail (val: number): void {
        let cur = this.head
        while (cur !== null && cur?.next !== null) {
            cur = cur.next
        }
        const newNode = new ListNode(val)
        cur.next = newNode
    }

    addAtIndex (index: number, val: number): void {
        let c = index;
        let cur: ListNode | null = this.head
        while (c > 0 && cur.next != null) {
            cur = cur?.next
            c -= 1;
        }
        if (c === 0) {
            const n = new ListNode(val, cur.next)
            cur.next = n
        }
    }

    deleteAtIndex (index: number): void {
        let c = index;
        let cur: ListNode | null = this.head
        while (c > 0 && cur.next != null) {
            cur = cur?.next
            c -= 1;
        }

        if (c === 0 && cur.next !== null) {
            cur.next = cur.next.next
        }
    }
}

let myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
console.log(myLinkedList.get(0))
myLinkedList.addAtTail(3);
console.log(myLinkedList.get(1))
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
console.log(myLinkedList.get(1));              // return 2
console.log(myLinkedList.get(2));  
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
console.log(myLinkedList.get(0));              // return 1
console.log(myLinkedList.get(1));              // return 3
