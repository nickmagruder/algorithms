// Leetcode Easy & Medium Linked List

////////////////////////////////////////////////////////////////////////////

// Delete Node
// Write a function to delete a node in a singly-linked list. 
// You will not be given access to the head of the list, instead you will be given access to the node 
// to be deleted directly.

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


/* 
SOLUTION: https://leetcode.com/problems/remove-nth-node-from-end-of-list/solution/  
Approach #2

Use two pointers. The first pointer advances the list by n+1 steps from the beginning, while the second pointer starts from the beginning of the list. Now, both pointers are exactly separated by n nodes apart. We maintain this constant gap by advancing both pointers together until the first pointer arrives past the last node. The second pointer will be pointing at the nnth node counting from the last. We relink the next pointer of the node referenced by the second pointer to point to the node's next next node.

Complexity Analysis:

Time complexity : O(L).
The algorithm makes one traversal of the list of L nodes. Therefore time complexity is O(L).

Space complexity : O(1).
We only used constant extra space

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


  slow.next = slow.next.next;
  return head;
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

////////////////////////////////////////////////////////////////////////////






// 21. Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

/* 
Approach 1: Recursion
Intuition

We can recursively define the result of a merge operation on two lists as the following (avoiding the corner case logic surrounding empty lists):

list1[0]+merge(list1[1:],list2) list1[0]<list2[0]
list2[0]+merge(list1,list2[1:]) otherwise

Namely, the smaller of the two lists' heads plus the result of a merge on the rest of the elements.

Algorithm
We model the above recurrence directly, first accounting for edge cases. Specifically, if either of l1 or l2 is initially null, there is no merge to perform, so we simply return the non-null list. Otherwise, we determine which of l1 and l2 has a smaller head, and recursively set the next value for that head to the next merge result. Given that both lists are null-terminated, the recursion will eventually terminate.
​
  /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var mergeTwoLists = function(l1, l2) {
  
  if (!l1) return l2;
  else  if (!l2) return l1;
  
  else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  
    else  {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
  
};


////////////////////////////////////////////////////////////////////////////


