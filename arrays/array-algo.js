// Arrays

const { ViewArrayOutlined } = require("@material-ui/icons");

////////////////////////////////////////////////////////////////////
// 1- Two Number Sum
////////////////////////////////////////////////////////////////////

function twoNumberSum(array, targetSum) {
  const numbers = {};

  for (const num of array) {
    const possibleMatch = targetSum - num;

    if (possibleMatch in numbers) {
      return [possibleMatch, num];
    } else {
      numbers[num] = true;
    }
  }
  return [];
}

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 2- Two Number Sum
////////////////////////////////////////////////////////////////////

function isValidSubsequence(array, sequence) {
  let arrayIndex = 0;
  let sequenceIndex = 0;

  while (arrayIndex < array.length && sequenceIndex < sequence.length) {
    if (array[arrayIndex] === sequence[sequenceIndex]) {
      sequenceIndex++;
    }
    arrayIndex++;
  }
  return sequenceIndex === sequence.length;
}

const arr = [5, 1, 22, 25, 6, -1, 8, 10];
const seq = [1, 6, -1, 10];

isValidSubsequence(arr, seq);

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 3- Sorted Squared Array
////////////////////////////////////////////////////////////////////

// Optimized - O(N) / O(N)
function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);

  let smallerValueIndex = 0;
  let largerValueIndex = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    const smallerValue = array[smallerValueIndex];
    const largerValue = array[largerValueIndex];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[i] = smallerValue * smallerValue;
      smallerValueIndex++;
    } else {
      sortedSquares[i] = largerValue * largerValue;
      largerValueIndex--;
    }
  }
  return sortedSquares;
}

const array = [1, 2, 3, 5, 6, 8, 9];
const array2 = [-10, -5, 0, 5, 10];

sortedSquaredArray(array);
sortedSquaredArray(array2);

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 4- Tournament Winner
////////////////////////////////////////////////////////////////////

const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
  let currentBestTeam = "";
  const scores = { [currentBestTeam]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[i];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}

function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;

  scores[team] += points;
}

// Tests:
/*
{
     "competitions": [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ],
  "results": [0, 0, 1]
}

{
  "competitions": [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"]
  ],
  "results": [0, 1, 1, 1, 0, 1]
}

{
  "competitions": [
    ["A", "B"]
  ],
  "results": [0]
} 
*/

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 7 - Smallest Difference
////////////////////////////////////////////////////////////////////

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];

    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }

    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}

arrayOne = [-1, 5, 10, 20, 28, 3];
arrayTwo = [26, 134, 135, 15, 17];

smallestDifference(arrayOne, arrayTwo);

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 8 - Move to End
////////////////////////////////////////////////////////////////////

function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    while (i < j && array[j] === toMove) j--;

    if (array[i] === toMove) swap(i, j, array);

    i++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;

moveElementToEnd(array, toMove);

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 10 - Spiral Traverse
////////////////////////////////////////////////////////////////////

function spiralTraverse(array) {
  const result = [];
  spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result);
  return result;
}

function spiralFill(array, startRow, endRow, startCol, endCol, result) {
  if (startRow > endRow || startCol > endCol) return;

  for (let col = startCol; col <= endCol; col++) {
    result.push(array[startRow][col]);
  }

  for (let row = startRow + 1; row <= endRow; row++) {
    result.push(array[row][endCol]);
  }

  for (let col = endCol - 1; col >= startCol; col--) {
    // Handle edge case: a single row in the middle of the matrix without double-counting
    if (startRow === endRow) break;
    result.push(array[endRow][col]);
  }

  for (let row = endRow - 1; row >= startRow + 1; row--) {
    // Handle edge case: a single column in the middle of the matrix without double-counting
    if (startCol === endCol) break;
    result.push(array[row][startCol]);
  }

  spiralFill(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result);
}

const arr = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
];

spiralTraverse(arr);