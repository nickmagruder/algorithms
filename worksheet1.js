function maxSubsetSumNoAdjacent(arr) {
  if (!arr.length) return 0;
  if (arr.length === 1) return arr[0];

  let second = arr[0];
  let largest = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    const current = Math.max(largest, second + arr[i]);
    second = largest;
    largest = current;
  }
  return largest;
}

const arr = [1, 7, 3, 9, 4, 12, 21, 4, 16, 5, 1, 6, 10];

console.log(maxSubsetSumNoAdjacent(arr));