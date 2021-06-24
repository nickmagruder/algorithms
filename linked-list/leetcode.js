// Leetcode Easy & Medium Linked List

////////////////////////////////////////////////////////////////////////////

// Delete Node
// Write a function to delete a node in a singly-linked list. 
// You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

// It is guaranteed that the node to be deleted is not a tail node in the list.


// Definition for singly-linked list.
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};



////////////////////////////////////////////////////////////////////////////

// Remove Nth Node
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  if (!fast) return head.next;

  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next
  return head
};

////////////////////////////////////////////////////////////////////////////

// Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */



 var reverseList = function (head) {

  let prevNode = null;

  while (head) {

    let NextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;

  }

  return prevNode;

};