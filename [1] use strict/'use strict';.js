'use strict';

function contains(arr, value) {
  return arr.includes(value);
}

// Пример использования
let myArray = [1, 2, 3, 4, 5];
console.log(contains(myArray, 3)); // true
console.log(contains(myArray, 6)); // false