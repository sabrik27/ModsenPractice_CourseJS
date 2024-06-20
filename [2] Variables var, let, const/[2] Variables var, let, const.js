'use strict';

// 1. Объявление с помощью var
console.log('Объявление с помощью var:');
var x = 5;
console.log(x); // 5

var x = 10;
console.log(x); // 10

console.log('');

// 2. Объявление с помощью let
console.log('Объявление с помощью let:');
let y = 5;
console.log(y); // 5

// let y = 10; // SyntaxError: Identifier 'y' has already been declared

console.log('');

// 3. Объявление с помощью const
console.log('Объявление с помощью const:');
const z = 5;
console.log(z); // 5

const z = 10; // SyntaxError: Identifier 'z' has already been declared

console.log('');

// 4. Функция, проверяющая наличие значения в массиве
function contains(arr, value) {
  return arr.includes(value);
}

let myArray = [1, 2, 3, 4, 5];
console.log(contains(myArray, 3)); // true
console.log(contains(myArray, 6)); // false
