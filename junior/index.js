// 2.You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// My solution
// var addTwoNumbers = function(l1, l2) {
//   var result;  
//   num1 = l1.join('')*1;
//   num2 = l2.join('')*1;
//   var arr = (num1 + num2).toString().split('');
//   var result = arr.map(str => {return parseInt(str)})
//   return result.reverse()

// };

// The other solution
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 || l2) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummy.next;
};


console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]));