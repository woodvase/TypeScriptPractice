import { ListNode, createLinkedList, printLinkedList } from "./SingleLinkedNode";

/**
 * Input: head = [1,2,3,4] Output: [2,1,4,3]
 * @param head 
 */
function swapPairs (head: ListNode | null): ListNode | null {
    let dummy = new ListNode(0, head)
    let cur: ListNode | null = dummy;
    while (cur?.next && cur.next.next) {
        let first: ListNode = cur.next
        let sec: ListNode = cur.next.next
        cur.next = sec;
        first.next = sec.next;
        sec.next = first;
        cur = cur.next.next
    }

    return dummy.next
};

printLinkedList(swapPairs(createLinkedList([1,2,3])))