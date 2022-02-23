function reverseString(str) {
  let strArr = str.split('');
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    const temp = strArr[start];
    strArr[start] = strArr[end];
    strArr[end] = temp;
    start++;
    end--;
  }

  return strArr.join('');
}

console.log(reverseString('hello'));
