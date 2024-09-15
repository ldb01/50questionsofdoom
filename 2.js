//Check if a String is a Substring of Another String
function isSubstring(str1, str2) {
    return str1.includes(str2);
  }
  
  console.log(isSubstring('hello world', 'world')); 

  // Reverse an Array:

  function reverseArray(arr) {
    return arr.reverse();
  }
  
  console.log(reverseArray([1, 2, 3, 4, 5])); 

//Find the Sum of Digits of a Number
function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  
  console.log(sumDigits(12345)); 

//Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  console.log(celsiusToFahrenheit(30)); 

//   Print the Multiplication Table of a Given Number:
function printMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  }
  
  printMultiplicationTable(5);

//   Find the Length of a String Without Using Built-in Funct?ions:

function stringLength(str) {
    let length = 0;
    while (str[length] !== undefined) {
      length++;
    }
    return length;
  }
  
  console.log(stringLength('hello')); 

//Swap Two Numbers Without Using a Temporary Variable:
function swapNumbers(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
  }
  
  console.log(swapNumbers(5, 10)); 

//   Find the LCM of Two Numbers:

function lcm(a, b) {
    return (a * b);
  }
  
  console.log(lcm(12, 18)); 

  
//if prime or nah
  
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }
  
  console.log(isPrime(17));



//Print the First 10 Prime Numbers
function printFirst10Primes() {
    const primes = [];
    let num = 2;
    while (primes.length < 10) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
    console.log(primes);
  }
  
  printFirst10Primes();

