// Arrays

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