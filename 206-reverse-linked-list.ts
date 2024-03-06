import { ListNode, createLinkedList, printLinkedList } from "./SingleLinkedNode";

/**
 * Input: head = [1,2,3,4,5]
   Output: [5,4,3,2,1]
 * @param head 
 * @returns 
 */
function reverseList(head: ListNode | null): ListNode | null {
    let rHead = new ListNode();
    let cur = head;
    while (cur !== null) { 
        const n = cur.next;
        cur.next = rHead.next;
        rHead.next = cur;
        cur = n
    }
    return rHead.next;
};

printLinkedList(reverseList(createLinkedList([1])))