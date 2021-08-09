/**
    Step 1 : Iterate through the array, and then iterate through all the linked list, and push all the keys
    into a single array; -- flatten - O(n * m)
    Step 2 : Create a linked list from the resultant array - O(n)
    TC - O(n2) for sufficiently large m = n
    SC - O(n2)
    
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const resultantArray = [];
  lists.forEach((head) => {
    while (head) {
      resultantArray.push(head.val);
      head = head.next;
    }
  });
  resultantArray.sort((x, y) => x - y);
  console.log(resultantArray);
  //resultant array ready, now create the resultList
  let resultListHead = null;
  for (let i = resultantArray.length - 1; i >= 0; i--) {
    insert_at_front(resultListHead, new ListNode(resultantArray[i]));
  }
  return resultListHead;
};

const insert_at_front = (head, node) => {
  if (head == null) {
    head = node;
  } else {
    const temp = { ...head };
    node.next = temp;
    head = node;
  }
  console.log(head);
};
