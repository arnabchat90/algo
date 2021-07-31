/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const l1Reversed = reverseList(l1);
  const l2Reversed = reverseList(l2);
  const sum = parseInt(print(l1Reversed)) + parseInt(print(l2Reversed));
  var head = null;
  for (let i = sum.toString().length - 1; i >= 0; i--) {
    var new_data = sum.toString()[i];
    var new_node = new ListNode(new_data);
    if (head == null) {
      head = new ListNode(new_data);
    } else {
      new_node.next = null;
      var last = head;
      while (last.next != null) last = last.next;
      last.next = new_node;
    }
  }

  return head;
};

function reverseList(head) {
  //3 pointer approach
  let current = head,
    prev = null,
    next = null;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function print(head) {
  let fullNumber = "";
  while (head !== null) {
    fullNumber += head.val;
    head = head.next;
  }
  return fullNumber;
}

//setup

var node11 = new ListNode(2);
var node12 = new ListNode(4);
var node13 = new ListNode(3);

node11.next = node12;
node12.next = node13;

var node21 = new ListNode(5);
var node22 = new ListNode(6);
var node23 = new ListNode(4);

node21.next = node22;
node22.next = node23;

console.log(addTwoNumbers(node11, node21));
