import { ListNode, createLinkedList, printLinkedList } from "./SingleLinkedNode";

/**
 * Input: head = [1,2,3,4,5], n = 2 Output: [1,2,3,5]
 * @param head 
 * @param n 
 */
function removeNthFromEnd (head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head)
    let c = n
    let pre: ListNode | null = dummy
    let end: ListNode | null = dummy
    while (c-- > 0 && end !== null) {
        end = end.next
    }
    while (end && end.next && pre) { 
        pre = pre.next;
        end = end.next;
    }
    if (end && pre && pre.next) {
        pre.next = pre.next.next;
    }
    return dummy.next
};

printLinkedList(removeNthFromEnd(createLinkedList([1]), 0))