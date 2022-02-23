// Strings

////////////////////////////////////////////////////////////////////
// A - Reverse a string
////////////////////////////////////////////////////////////////////

// 2-POINTER, BEST:
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

// BUILT-IN-METHODS
const reverseString = (str) => str.split('').reverse().join('');

// RECURSIVE
function reverseString(str) {
  return str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString('hello');

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 1 - Palindrome Check
////////////////////////////////////////////////////////////////////

// RECURSIVE:
function isPalindrome(str, i = 0) {
  const j = str.length - 1 - i;
  return i >= j ? true : str[i] === str[j] && isPalindrome(str, i + 1);
}

// TWO POINTERS:
function isPalindrome(str) {
  let leftIdx = 0;
  let rightIdx = str.length - 1;

  while (leftIdx < rightIdx) {
    if (str[leftIdx] !== str[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 2 - Caesar Cipher Encryptor
////////////////////////////////////////////////////////////////////

function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;

  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join('');
}

function getNewLetter(letter, newKey) {
  const newLetterCode = letter.charCodeAt() + newKey;
  return newLetterCode <= 122
    ? String.fromCharCode(newLetterCode)
    : String.fromCharCode(96 + (newLetterCode % 122));
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 4 - Generate Document
////////////////////////////////////////////////////////////////////

function generateDocument(characters, document) {
  const characterCounts = {};

  for (const character of characters) {
    if (!(character in characterCounts)) characterCounts[character] = 0;

    characterCounts[character]++;
  }

  for (const character of document) {
    if (!(character in characterCounts) || characterCounts[character] === 0)
      return false;

    characterCounts[character]--;
  }
  return true;
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 5 - First Non-repeating Character
////////////////////////////////////////////////////////////////////

function firstNonRepeatingCharacter(str) {
  const characterCounts = {};

  for (const character of str) {
    if (!(character in characterCounts)) characterCounts[character] = 0;
    characterCounts[character]++;
  }

  for (let idx = 0; idx < str.length; idx++) {
    const character = str[idx];
    if (characterCounts[character] === 1) return idx;
  }

  return -1;
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 6 - Longest Palindromic Substring
////////////////////////////////////////////////////////////////////

function longestPalindromicSubstring(string) {
  let current = [0, 1];

  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    current =
      current[1] - current[0] > longest[1] - longest[0] ? current : longest;
  }
  return string.slice(current[0], current[1]);
}

function getLongestPalindromeFrom(string, leftIndex, rightIndex) {
  while (leftIndex >= 0 && rightIndex < string.length) {
    if (string[leftIndex] !== string[rightIndex]) break;
    leftIndex--;
    rightIndex++;
  }
  return [leftIndex + 1, rightIndex];
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// 7 - Group Anagrams
////////////////////////////////////////////////////////////////////

function groupAnagrams(words) {
  const anagrams = {};

  for (const word of words) {

    const sortedWord = word.split('').sort().join('');

    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);

    } else {
      anagrams[sortedWord] = [word];
    }
  }

  return Object.values(anagrams);
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
