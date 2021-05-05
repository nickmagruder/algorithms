/* 
Path sum
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equal the given sum 

Solve with recursion

Time: O(n) - hit every node once,
Space: O(n) - Since recursive (if returning boolean)



*/

// definition for binary tree node
function Node(value) {
  this.val = value;
  this.left = null
  this.right = null;
}


let PathSum = function (root, sum) {

  let response = false;  // start response as false, helper function will update to true

  function helper(node, currentSum) { // starts on a node, currentSum starts as 0

    if (!node || response) {  // if no node given OR response = true, RETURN
      return;
    }

    currentSum += node.value; // set currentSum plus-equals to the node's value

    if (!node.left && !node.right && currentSum === sum) { 
      // if node has no right or left, and currentSum = sum, response = true;
      response = true;
    }

    
    helper(node.left, currentSum);  // traverse the tree recursively
    helper(node.right, currentSum);
  }

  helper(root, 0); // CALL THE FUNCTION: on initial node (root), and initial sum of 0
  return response;

}







/* let OTHERhasPathSum = function (root, sum) {

  if (root === null) {
    return false;
  }

  if (sum === root.val && root.left === null && root.right === null) {
    return true;
  }
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root);
}; */