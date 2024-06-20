function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Меняем местами элементы
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}
const numbers = [5, 2, 8, 1, 9];
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); // Вывод: [1, 2, 5, 8, 9]
