// Memorization List

// Binary Trees

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  //////// Depth-First Pre-Order RECURSIVE ///////
  PreOrder() {
    let data = []; 

    function traverse(node) {

      data.push(node.value);

      if (node.left) traverse(node.left); 
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}
