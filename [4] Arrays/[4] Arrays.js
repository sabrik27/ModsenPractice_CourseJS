function sumFirstHalf(arr) {
  const mid = Math.floor(arr.length / 2);
  let sum = 0;
  for (let i = 0; i < mid; i++) {
    sum += arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const result = sumFirstHalf(numbers);
console.log(result); // Вывод: 10
