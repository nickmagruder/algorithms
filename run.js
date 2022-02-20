'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let numberStore = {};
    let length = array.length;
    
    for (let i; i <= arr.length; i++) {
        if (arr[i] < 0) {
           console.log(arr[i]);
           numberStore.negative += 1;
        } else if (arr[i] > 0) {
            numberStore.positive += 1;
        }
        else numberStore.zero += 1;
    }
    
    console.log(numberStore.negative);
    console.log(numberStore.positive);
    console.log(numberStore.zero);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
