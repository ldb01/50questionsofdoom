// 31. Convert a String to Uppercase Without Using Built-in Functions
function toUpperCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += String.fromCharCode(str.charCodeAt(i) - 32);
    }
    return result;
  }
  
  console.log("Converted to uppercase:", toUpperCase("hello"));
  
  // 32. Merge Two Sorted Arrays
  function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        merged.push(arr1[i]);  
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
    return merged;
  }
  
  console.log("Merged arrays:", mergeSortedArrays([1, 3, 5], [2, 4, 6]));
  
  // 33. Find the Intersection of Two Arrays
  function findIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersection = [];
    for(const element of set1) {
      if (set2.has(element)) {
        intersection.push(element);
      }
    }
    return intersection;
  }
  
  console.log("Intersection of arrays:", findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
  
  // 34. Count the Number of Words in a String
  function countWords(str) {
    return str.trim().split(/\s+/).length;
  }
  
  console.log("Number of words in 'hello world':", countWords("hello world"));
  
  // 35. Check if Two Strings are Anagrams
  function areAnagrams(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  }
  
  console.log("Are 'listen' and 'silent' anagrams?", areAnagrams("listen", "silent"));
  
  // 36. Print the Pattern
  function printPattern1(rows) {
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= i; j++) {
        console.log(j);
      }
      console.log('\n');
    }
  }
  
  console.log("Pattern 1:");
  printPattern1(5);
  
  // 37. Print the Pattern
  function printPattern2(rows) {
    for (let i = rows; i > 0; i--) {
      for (let j = i; j > 0; j--) {
        console.log(j);
      }
      console.log('\n');
    }
  }
  
  console.log("Pattern 2:");
  printPattern2(5);
  
  // 38. Find the Sum of Two Matrices
  function addMatrices(matrix1, matrix2) {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrix1[i].length; j++) {
        result[i][j] = matrix1[i][j] + matrix2[i][j];
      }
    }
    return result;
  }
  
  const matrix1 = [[1, 2], [3,4]];
  const matrix2 = [[5, 6], [7, 8]];
  console.log("Sum of matrices:", addMatrices(matrix1, matrix2));
  
  // 39. Transpose a Matrix
  function transposeMatrix(matrix) {
    const result = [];
    for (let i = 0; i < matrix[0].length; i++) {
      result[i] = [];
      for (let j = 0; j < matrix.length; j++) {
        result[i][j] = matrix[j][i];
      }
    }
    return result;  
  }
  
  console.log("Transposed matrix:", transposeMatrix([[1, 2], [3, 4]]));
  
  // 40. Check if a Number is Armstrong
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