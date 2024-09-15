// 25. Calculate the Power of a Number
function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }
  
  console.log("Power of 2 raised to 3:", power(2, 3));


// 26. Count Vowels in a String
  function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  
  console.log("Number of vowels in 'hello world':", countVowels("hello world"));
  
  // 27. Check if a Year is a Leap Year
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  console.log("Is 2024 a leap year?", isLeapYear(2024));   
  
  
  // 28. Find the Minimum Element in an Array
  function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  console.log("Minimum element in [5, 2, 9, 3, 10]:", findMin([5, 2, 9, 3, 10]));
  
  // 29. Find the Maximum Element in an Array
  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  console.log("Maximum element in [5, 2, 9, 3, 10]:", findMax([5, 2, 9, 3, 10]));
  
  // 30. Check if a String Contains Only Digits
  function containsOnlyDigits(str) {
    return str.match(/^\d+$/) !== null;
  }
  
  console.log("Does '12345' contain only digits?", containsOnlyDigits("12345"));
  