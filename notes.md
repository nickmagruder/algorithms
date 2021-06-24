# Progress

# Structure Memorization
	- Linked Lists
		○ Node/Class - 70%
		○ Push - 70%
		○ Pop - %
		○ Reverse - %
		○ Traverse/Print - %
	- Doubly Linked Lists
		○ H
	- Stacks
		○ Node - %
		○ Class - %
		○ Push - %
		○ Pop - %
	- Queues
		○ Node - %
		○ Class - %
		○ Enqueue - %
		○ Dequeue -  %
	- Trees
		○ Node %
		○ Class %
		○ preOrder traversal - %
		○ pathSum - %
	- QuickSort
		○ H
	- Hash
H


## 1 - Arrays and Strings
- CtCI solved: 0/9
- Leetcode Solved
  - Easy: 
  - Medium: 
- Confidence: 50%

## 2 - Linked Lists
- CtCI solved: 1/8
- Leetcode Solved
  - Easy: 
  - Medium: 
- Confidence: 70%

## 3 - Stacks & Queues
- CtCI solved: 0/6
- Leetcode Solved
  - Easy: 
  - Medium: 
- Confidence: 50%

## 4 - Trees
- CtCI solved (w/ graphs): 0/12
- Leetcode Solved
  - Easy: 
  - Medium: 
- Confidence: 50%

## 4 - Graphs
- CtCI solved(w/ trees): 0/12
- Leetcode Solved
  - Easy: 
  - Medium: 
- Confidence: 10%

## 5 - Bit Manipulation ...
- CtCI solved: 0/8
- Leetcode Solved
  - Easy: 
  - Medium: 
- Confidence: 0%

## 6 - Math and Logic Puzzles
- CtCI solved: 0/10
- Leetcode Solved
  - Easy: 
  - Medium: 
- Confidence: %

## 7 - Object-Oriented Design
- CtCI solved: 0/9
- Leetcode Solved
  - Easy: 0/2
  - Medium: 
- Confidence: %

## 8 - Recursion
- CtCI solved (w/ Dynamic): 0/14
- Leetcode Solved
  - Easy: 
  - Medium: 
- Confidence: %

## 8 - Dynamic Programming
- CtCI solved (w/ Recursion): 0/14
- Leetcode Solved
  - Easy: 
  - Medium: 
- Confidence: %

## 9 - System Design and Scalability
- CtCI solved: 0/8
- Leetcode Solved
  - Easy: 
  - Medium: 
- Confidence: %

## 10 - Sorting and Searching
- CtCI solved: 0/11
- Leetcode Solved
  - Easy: 
  - Medium: 
- Confidence: %

## 11 - Testing
- CtCI solved: 0/6
- Leetcode Solved
  - Easy: 
  - Medium: 
- Confidence: %

## 16 - Moderate Questions
- CtCI solved: 0/26
- Confidence: %


# Problem Solving Approaches
- https://cs.slides.com/colt_steele/problem-solving-patterns

# Problem Solving Patterns
- https://cs.slides.com/colt_steele/problem-solving-patterns#/26

## Frequency Counter
- https://cs.slides.com/colt_steele/problem-solving-patterns#/27

- Using objects or sets to collects values and their frequencies
- Can often avoid the need for next loops
- Typical pattern:
  - Push values to an object (in the first loop)
  - check the second set of values against the object (in a second loop)

## Multiple Pointers
- https://cs.slides.com/colt_steele/problem-solving-patterns#/33
- Create pointers/values that correspond to an index or position and move towards beginning, end or middle depending on needs/criteria
  - Very efficient, minimal space complexity

## Sliding Window
- https://cs.slides.com/colt_steele/problem-solving-patterns#/40
- Look at a rolling "window" of values (typically in an array) in order to prevent comparing to the entire array multiple times. EX: Look at 3 numbers in an array and return the the largest of 3, look at 3 at a time and just subtract the first one and add the next on on the next step, if total is larger than "maxvalue", push number to "maxvalue"

## Divide and Conquer
- https://cs.slides.com/colt_steele/problem-solving-patterns#/45
- Basically a binary search!


# Big O
https://cs.slides.com/colt_steele/big-o-notation
https://www.bigocheatsheet.com/

## Time
- Instead of "timing" things, we should count the number of simple operations a computer has to perform
- Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2 
- But regardless of the exact number, the number of operations grows roughly proportionally with n

## O(1)
- Always a given number of operations, does not increase as n increases:
- Flat Line
```javascript
function addUpTo(n) {
  return n * (n + 1) /2;
}
```
## O(n)
- Number of operations is bounded by a multiple of n
- O(2n) or O(10n) gets simplified down to O(n)
- Linear increase, bound to constant rate of "n"

## O(n^2)
- Nested for-loops
- Exponential

## Simplifying Big O
- Constants don't matter, smaller terms don't matter
  - O(2n) -> O(n)
  - O(500) -> O(1)
  - O(13n^2) -> O(n^2)

## Shorthands
- Arithmetic operations are constant
- Variable assignment is constant 
- Accessing elements in array by index or object by key are constant
- Loops: complexity is length of loop TIMES complexity of what happens INSIDE the loop

# Big O Space Complexity
## Shorthands
- Primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space where n is the string length
- Reference types (arrays and objects) generally O(n) where n is the length(of an array) or number of keys(in objects)


# Big 0 Logarithms
- log2(8) = 3  ... 2^3 = 8
- we omit the 2, assuming "squared"

- The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

- O(log n) complexity is great! Its almost constant!
- Certain searching algorithms run at O(log n)

# Big 0 of Arrays and Objects
https://cs.slides.com/colt_steele/built-in-data-structures-25


# Searching Algorithms
- https://cs.slides.com/colt_steele/tries-21

## Linear Search
- https://cs.slides.com/colt_steele/tries-21#/4
- Javascript built-in methods use linear search
- Set interval, checking everything one item at a time

# Stacks
https://cs.slides.com/colt_steele/stacks

# Queues
https://cs.slides.com/colt_steele/queues



# Trees
[Slides](https://cs.slides.com/colt_steele/trees#/51/0/5)

# Binary Search Tree

## INSERTING A NODE
### Steps - Iteratively or Recursively
- Create a new node
- Starting at the root
  - Check if there is a root, if not - the root now becomes that new node!
  - If there is a root, check if the value of the new node is greater than or less than the value of the root
  - If it is greater 
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the right property
  - If it is less
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the left property

## Finding a Node in a BST
### Steps - Iteratively or Recursively
- Starting at the root
  - Check if there is a root, if not - we're done searching!
  - If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
  - If not, check to see if the value is greater than or less than the value of the root
  - If it is greater 
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, we're done searching!
  - If it is less
    - Check to see if there is a node to the left
       - If there is, move to that node and repeat these steps
       - If there is not, we're done searching!

## Big O of BST
Must be sorted

Best and average cases:

Insertion - O(log n)
Searching - O(log n)
 
(But not guaranteed)

Worst case? Some configurations are slow, worst case, a "single-line" BST that is effectively a linked-list

# Binary Tree Traversal

## Breadth First - Iterative
- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - If there is a left property on the node dequeued - add it to the queue
  - If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values

# DepthFirst - PreOrder - Recursive
- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - Push the value of the node to the variable that stores the values
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values


# DepthFirst - PostOrder - Recursive
## Identical to PreOrder, except, explore left & right nodes first before pushing value
- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
  - Push the value of the node to the variable that stores the values
  - Invoke the helper function with the current variable
- Return the array of values

## DepthFirst - InOrder - Recursive
- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - Push the value of the node to the variable that stores the values
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values

## Why Breadth vs Depth??

- Depends on type of tree
- Breadthfirst bad for a very wide tree - depthfirst is better (for space)
- In-order will always return a BST ... In-order.

# Path sum
## Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equal the given sum

- Solve with recursion

- Take value of every value we visit, and subtract it from the total
- If we end up with 0 at the end of any root-to-leaf, return true
  - If we never end up with 0, return false
  

# Hash Tables
- Used to store key-value pairs
- keys in hashtable are not ordered
- They are fast
- Objects are hash tables

## WHat makes a good hash?
- Fast (near constant time)
- Doesn't cluster outputs at specific indices, but distributes uniformly
- Deterministic (same input always yields the same output)

