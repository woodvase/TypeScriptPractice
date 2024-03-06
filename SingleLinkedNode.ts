export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


export function createLinkedList (nums: number[]) {
    let last = null
    for (let i = nums.length - 1; i >= 0; i--) {
        const node: ListNode = new ListNode(nums[i], last);
        last = node;
    }

    return last;
}

export function printLinkedList (head: ListNode | null) { 
    let cur = head
    while (cur !== null) { 
        console.log(cur.val)
        cur = cur.next
    }
}
