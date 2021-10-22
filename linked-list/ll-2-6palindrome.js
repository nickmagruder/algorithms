// Recursive Solution

// In this solution, we first make a recursive call that traverses its way 
// through the supplied Linked List. Then, as each call begins to finish 
// (starting with the final node), we compare it with the original head. 
// In other words, we compare the first node with the last, and then move both inward.

// It’s a clever approach and comes without the memory intensity of the former one.
// It’s also readable and very compact.

// https://leetcode.com/problems/palindrome-linked-list/submissions/
// https://duncan-mcardle.medium.com/leetcode-problem-234-palindrome-linked-list-javascript-fc7293155c11


var isPalindrome = function (head) {
  function isPalindromRecursive(recursiveHead) {
      // Reached the end of the list
      if (recursiveHead == null) {
          return true;
      }

      // Recursively traverse the linked list
      const next = isPalindromRecursive(recursiveHead.next);

      // Check if the current level of the linked list mirrors its mirror point
      const valid = recursiveHead.val === head.val;

      // Move the original linked list inward
      head = head.next;
      return next && valid;
  }
  return isPalindromRecursive(head);
};





// CtCI solution:

/* 
let LinkedList = function (value) {
  this.value = value;
  this.next = null;
};

let palindrome = function (head) {
  let mid = head;
  let end = head;
  let isEven = true;
  let firstHalf = null;
  let frontNode = null;

  while (end.next !== null) {
    isEven = true;
    if (firstHalf === null) {
      firstHalf = new LinkedList(mid.value);
    } else {
      frontNode = firstHalf;
      firstHalf = new LinkedList(mid.value);
      firstHalf.next = frontNode;
    }
    mid = mid.next;
    end = end.next;
    if (end.next !== null) {
      end = end.next;
      isEven = false;
    }
  }

  if (!isEven) {
    mid = mid.next;
  }

  while (mid !== null) {
    // console.log(mid.value, firstHalf.value);
    if (mid.value !== firstHalf.value) {
      return false;
    }
    mid = mid.next;
    if (firstHalf !== null) {
      firstHalf = firstHalf.next;
    }
  }
  return true;

};

//  TEST

let a = new LinkedList('a');
let b = new LinkedList('b');
let c = new LinkedList('c');
let d = new LinkedList('d');
let e = new LinkedList('c');
let f = new LinkedList('b');
let g = new LinkedList('a');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(palindrome(a)); 

*/