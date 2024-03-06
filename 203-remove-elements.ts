import { ListNode, createLinkedList, printLinkedList } from "./SingleLinkedNode";

/**
 * Input: head = [1,2,6,3,4,5,6], val = 6
 * Output: [1,2,3,4,5]
 * @param head 
 * @param val 
 * @returns 
 */
function removeElements (head: ListNode | null, val: number): ListNode | null {
    if (!head) {
        return null;
    }
    const dummy = new ListNode(0, head);
    let cur: ListNode = dummy;
    while (cur.next !== null) {
        while (cur.next && cur.next.val === val) {
            if (cur.next.next !== null) {
                cur.next = cur.next.next
            } else {
                cur.next = null
            }
        }
        if (cur.next) {
            cur = cur.next
        }
    }

    return dummy.next
}

printLinkedList(removeElements(createLinkedList([]), 7))