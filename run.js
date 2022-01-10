class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseList(head) {
  let prevNode = null;

  while (head) {
    let nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;
  }

  return prevNode;
}

