////////////////////////////////////////////////////////////////////
// 1- Depth First Search
////////////////////////////////////////////////////////////////////

class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }

  addNeighbor(value) {
    this.neighbors.push(new Node(value));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.value);
    for (const neighbor of this.neighbors) {
      neighbor.depthFirstSearch(array);
    }
    return array;
  }
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 2- Single Cycle Check
////////////////////////////////////////////////////////////////////

function hasSingleCycle(array) {
  let numElementsVisited = 0;
  let currentIdx = 0;

  while (numElementsVisited < array.length) {
    if (numElementsVisited > 0 && currentIdx === 0) return false;
    numElementsVisited++;
    currentIdx = getNextIdx(currentIdx, array);
  }

  return currentIdx === 0;
}

function getNextIdx(currentIdx, array) {
  const jump = array[currentIdx];
  const nextIdx = (currentIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}

const arr = [2, 3, 1, -4, -4, 2];

hasSingleCycle(arr);

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 5 - Youngest Common Ancestor
////////////////////////////////////////////////////////////////////

class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {

  const depthOne = getDescendantDepth(descendantOne, topAncestor);
  const depthTwo = getDescendantDepth(descendantTwo, topAncestor);

  if (depthOne > depthTwo) {
    return backtrackAncestralTree(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo
    );

  } else {
    return backtrackAncestralTree(
      descendantTwo,
      descendantOne,
      depthTwo - depthOne
    );
  }
}


function getDescendantDepth(descendant, topAncestor) {

  let depth = 0;

  while (descendant !== topAncestor) {
    depth++;
    descendant = descendant.ancestor;
  }

  return depth;
}


function backtrackAncestralTree(lowerDescendant, higherDescendant, diff) {

  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor;
    diff--;
  }

  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor;
    higherDescendant = higherDescendant.ancestor;
  }
  
  return lowerDescendant;
}

