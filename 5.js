// Check if a Number is Armstrong

function isArmstrong(num) {
    const digits = num.toString().split('');
    const n = digits.length;
    let sum = 0;
    for (const digit of digits) {
      sum += Math.pow(parseInt(digit), n);
    }
    return sum === num;
  }
  
  console.log("Is 153 an Armstrong number?", isArmstrong(153));

//Convert a Decimal Number to Binary
function decimalToBinary(num) {
    let binary = '';
    while (num > 0) {
      binary = (num % 2) + binary;
      num = Math.floor(num / 2);
    }
    return binary;
  }
  
  console.log("Decimal 10 to binary:", decimalToBinary(10));

//Find the Sum of Elements in the Main Diagonal of a Matrix

function sumMainDiagonal(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
      sum += matrix[i][i];
    }
    return sum;
  }
  
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log("Sum of main diagonal:", sumMainDiagonal(matrix));

  // Remove All Whitespaces from a String
  function removeWhitespaces(str) {
    return str.replace(/\s/g, '');
  }
  
  console.log("Removed whitespaces:", removeWhitespaces("Hello, world!"));

// Find the Common Elements in Three Arrays
function findCommonElements(arr1, arr2, arr3) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const set3 = new Set(arr3);
    const intersection = [];
    for (const element of set1) {
      if (set2.has(element) && set3.has(element)) {
        intersection.push(element);
      }
    }
    return intersection;
  }
  
  console.log("Common elements:", findCommonElements([1, 2, 3], [2, 3, 4], [3, 4, 5]));

//Find the Median of an Array
function findMedian(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
      return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
    } else {
      return sortedArr[middleIndex];
    }
  }
  
  console.log("Median of [1, 2, 3, 4, 5]:", findMedian([1, 2, 3, 4, 5]));

//Print All Prime Numbers in a Given Range
function printPrimeNumbers(start, end) {
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  console.log("Prime numbers between 1 and 100:");
  printPrimeNumbers(1, 100);


// Reverse the Words in a Sentence

function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
  }
  
  console.log("Reversed sentence:", reverseWords("hello world"));

//Find the First Non-Repeated Character in a String

function findFirstNonRepeatedChar(str) {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
      charCount[str[i]] = (charCount[str[i]] || 0) + 1;
    }
    for (let i = 0; i < str.length; i++) {
      if (charCount[str[i]] === 1) {
        return str[i];
      }
    }
    return null;
  }
  
  console.log("First non-repeated character:", findFirstNonRepeatedChar("hello world"));


  //if array is sorted 

  function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  console.log("Is the array [1, 2, 3, 4, 5] sorted?", isSorted([1, 2, 3, 4, 5]));