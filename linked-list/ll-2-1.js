// CtCI LL Questions - 2.1 - 2.8

////////////////////////////////////////////////////////////////////////////

// 2.1 - Remove Dups
// Write code to remove duplicates from an unsorted linked list
//
//  Follow up: How would you solve this problem if a temporary buffer is not allowed?

/* CLASS */
let LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

/* FUNCTIONS */
let checkDups = function(head, node) {
  let current = head;
  while (current !== node) {
    if (current.value === node.value) {
      return true;
    }
    current = current.next;
  }
  return false;
};

let printLinkedList = function(head) {
  let node = head;
  console.log('start of linked list');
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
  console.log('end of linked list');
};

let removeDups = function(head) {
  let node = head;
  while (node !== null) {
    if (node.next !== null && checkDups(head, node.next)) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
};

/* TESTS */
let a = new LinkedList('a');
let b = new LinkedList('b');
let c = new LinkedList('c');
let d = new LinkedList('d');
let e = new LinkedList('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

removeDups(a);
printLinkedList(a);

let f = new LinkedList('f');
let g = new LinkedList('g');
let h = new LinkedList('g');
let i = new LinkedList('g');
let j = new LinkedList('g');

f.next = g;
g.next = h;
h.next = i;
i.next = j;

removeDups(f);
printLinkedList(f);

let k = new LinkedList('g');
let l = new LinkedList('g');
let m = new LinkedList('g');
let n = new LinkedList('b');
let o = new LinkedList('g');

k.next = l;
l.next = m;
m.next = n;
n.next = o;

removeDups(k);
printLinkedList(k);


////////////////////////////////////////////////////////////////////////////

// 2.2 - Return Kth to Last
// Implement an algorithm to find the kth to last element of singly linked list


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  
}
