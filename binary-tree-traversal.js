/* 
Slides:
https://cs.slides.com/colt_steele/trees#/15/0/3 

BreadthFirst
- Use a queue (or array)
- Iterative
*/


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

    //////// see BST for insert, find & contains ///////



    //////// BreadthFirst - Iterative ///////

    BreadthFirst() {

        let node = this.root;
        let data = [];       // data to return at end
        let queue = [];      // queue for traversing

        queue.push(node);    // place root node in the queue

        while (queue.length) {    // must do queue.length since an empty array is truthy

            node = queue.shift();  // remove something from queue
            data.push(node.value); // adding to return data

            if (node.left) queue.push(node.left);   // check if there is a left, push left to queue
            if (node.right) queue.push(node.right); // repeat for right

        }

        return data;
    }


    //////// Depth-First Pre-Order RECURSIVE ///////

    PreOrder() {

        let data = [];  // data to return

        function traverse(node) { // helper function

            data.push(node.value);  // visit a top node, visit entire left side, then entire right

            if (node.left) traverse(node.left); // if left property exists: call helper function on it
            if (node.right) traverse(node.right); // repeat on right
        }

        traverse(this.root); // invoke helper function, cption: traverse(current) if start from not-root
        return data;

    }


    //////// Depth-First Post-Order RECURSIVE ///////
    // Identical to PreOrder, except, explore left & right nodes first before pushing value

    PostOrder() {

        let data = [];

        function traverse(node) {

            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);

        }

        traverse(this.root);
        return data;

    }


    //////// Depth-First In-Order RECURSIVE ///////
    // Identical to PreOrder, except traverse left first, then push data, then traverse right

    InOrder() {

        let data = [];

        function traverse(node) {

            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);

        }

        traverse(this.root);
        return data;

    }


    InOrderALT() {

        let data = [];

        function traverse(node) {

            node.left && traverse(node.left); // if(node.left) = node.left (both truthy/falsy)
            data.push(node.value);
            node.right && traverse(node.right);

        }

        traverse(this.root);
        return data;
        
    }


}


let tree = new Tree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();



