function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let count = 0;
  let resultArr = [];
  let carryOver = 0;
  while (l1 !== null || l2 !== null) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carryOver;
    if (sum < 10) {
      resultArr[count] = sum;
      count++;
      carryOver = 0;
    } else {
      resultArr[count] = sum % 10;
      carryOver = 1;
      count++;
    }
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  let root = new ListNode(resultArr[0]);
  const temp = root;
  for (let i = 1; i < resultArr.length - 1; i++) {
    root.next = new ListNode(resultArr[i]);
    root = root.next;
  }
  return temp;
};

const list = new ListNode(2);
list.next = new ListNode(4);
list.next.next = new ListNode(3);

const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

console.log(addTwoNumbers(list, list2));
