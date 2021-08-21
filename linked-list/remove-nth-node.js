/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    if(head == null) {
        return;
    }
    let first_pointer = head;
    let second_pointer = head;
    //update first_pointer to point to n;
    first_pointer = travel_forward(first_pointer, n);
    
    while(first_pointer.next !== null) {
        second_pointer = second_pointer.next;
        first_pointer = first_pointer.next;
    }
    //delete the next node after second pointer;
    second_pointer.next = second_pointer.next.next;
    return head;
};

const travel_forward = (pointer, n) => {
    while( n > 0) {
        pointer = pointer.next;
        n = n - 1;
    }
    return pointer;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

removeNthFromEnd(head, 2);