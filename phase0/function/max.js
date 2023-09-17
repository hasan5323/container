//array as input
function getMax(arr) {
    let nilaiMax = 0
    for (i = 0; i < arr.length; i++) {
    if (arr[i]>nilaiMax) {
        nilaiMax = arr[i]
    }
}
return `nilai maxsimum adalah ${nilaiMax}`
}
let array = [12,13,123,123,43,55,333,12,87,678,1000,1,2,34,4,5,6]
console.time();
console.log(getMax(array));
console.timeEnd()