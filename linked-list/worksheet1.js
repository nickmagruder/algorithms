class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}


class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }


  push(value) {
      let newNode = new Node(value);
      if (!this.head) {
          this.head = newNode;
          this.tail = this.head;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }


  pop() {

      if (!this.head) return null;

      let current = this.head;
      let newTail = current;

      while (current.next) {
          newTail = current;
          current = current.next;
      }

      this.tail = newTail;
      this.tail.next = null;
      this.length--;

      if (this.length === 0) {
          this.head = null;
          this.tail = null;
      }

      return current;
  }


  shift() {
      if (!this.head) return undefined;
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if (this.length === 0) {
          this.tail = null;
      }
      return currentHead;
  }


  unshift(value) {
      let newNode = new Node(value);
      if (!this.head) {
          this.head = newNode;
          this.tail = this.head;
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
  }


  get(index) {
      if (index < 0 || index >= this.length) return null;
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
          current = current.next;
          counter++;
      }
      return current;
  }


  set(index, value) {
      let foundNode = this.get(index);
      if (foundNode) {
          foundNode.value = value;
          return true;
      }
      return false;
  }


  insert(index, value) {
      if (index < 0 || index > this.length) return false;
      if (index === this.length) return !!this.push(value);
      if (index === 0) return !!this.unshift(value);

      let newNode = new Node(value);
      let prev = this.get(index - 1);
      let temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
  }


  remove(index) {
      if (index < 0 || index >= this.length) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();
      let previousNode = this.get(index - 1);
      let removed = previousNode.next;
      previousNode.next = removed.next;
      this.length--;
      return removed;
  }


  reverse() {

      let current = this.head;
      this.head = this.tail;
      this.tail = current;

      let next;
      let prev = null;

      while (current) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
      }
      return this;
  }


  printTraverse() {

      let arr = [];
      let current = this.head

      while (current) {
          arr.push(current.value)
          current = current.next
      }
      return arr;
  }


}

let removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i++) {
      fast = fast.next
      if (!fast) return head.next
      while (fast.next) fast = fast.next, slow = slow.next
      slow.next = slow.next.next
      return head
  }
};


let list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)








