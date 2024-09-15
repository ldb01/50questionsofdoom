
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr; 
  
  }
  
  console.log(reverseString('hello world'));

//   *Check for Palindrome*

function isPalindrome(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return str === reversedStr;
  }
  
  console.log(isPalindrome('cat in a car'));
  
//   *Find the Factorial of a Number*

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(5)); 

//fibonacci series

function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    let fib1 = 0;
    let fib2 = 1;
    for (let i = 2; i <= n; i++) {
      const temp = fib1 + fib2;
      fib1 = fib2;
      fib2 = temp;
    }
    return fib2;
  }
  
  console.log(fibonacci(10)); 

  //Find the Largest Element in an Array

  function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  
  console.log(findLargest([5, 12, 9, 3, 10]));  

// Sum of Elements in an Array

function suminarray(arr){
    let sum=0;
    for(let i=0; i<arr.length;i++)
    {
        sum=sum+arr[i];

    }
    return sum;

}
  
console.log(suminarray([34,56,2,75]));

// Count Occurrences of a Character in a String
function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countOccurrences('hello world', 'o'));

  //Check if a Number is Even or Odd

  function isEven(num) {
    return num % 2 === 0;
  }
  
  console.log(isEven(4)); 

// Find the Second Largest Element in an Array:
function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = arr[1];
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }
  
  console.log(findSecondLargest([5, 2, 9, 3, 10])); 

//   Remove Duplicates from an Array:

function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  console.log(removeDuplicates([1, 2, 3, 2, 4, 1])); 