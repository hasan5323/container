/*
  ================================
  === GET MIN,MAX,AVG,ODD,EVEN ===
  ================================

  Mempunyai 2 parameter:
  1. arr berupa array.
  2. key berupa string. "min", "max", "avg", "odd", "even"
*/
function getDataBy(arr, key) {
  if (!arr || !key) {
    console.log(
      "berikan 2 input, array yang ingin dikerjakan, dan operasi yang diinginkan"
    );
  } else {
    switch (key) {
      case "min":
        let currentMin = Infinity;
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < currentMin) {
              currentMin = arr[i][j];
            }
          }
        }
        return currentMin;
      case "max":
        let currentMax = -Infinity;
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > currentMax) {
              currentMax = arr[i][j];
            }
          }
        }
        return currentMax;
      case "avg":
        let sum = 0;
        let countItem = 0;
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
            countItem++;
          }
        }
        let avg = sum / countItem;
        return avg;
      case "odd":
        let ganjil = [];
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 === 1) {
              ganjil.push(arr[i][j]);
            }
          }
        }
        return ganjil;
      case "even":
        let genap = [];
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 === 0) {
              genap.push(arr[i][j]);
            }
          }
        }
        return genap;
      default:
        return "masukkan operasi yang diinginkan";
    }
  }
}
let numbers = [
  [1, 2, 9],
  [10, 3, 18],
  [29, 1, 1000],
];
console.log(getDataBy(numbers, "min")); // 1
console.log(getDataBy(numbers, "max")); // 1000
console.log(getDataBy(numbers, "avg")); // 119.222222
console.log(getDataBy(numbers, "odd")); // [1, 9, 3, 29, 1]
console.log(getDataBy(numbers, "even")); // [2, 10, 18, 1000]
