// let kalimat = "ini memang berat, tapi sabar ini ujian"
// let vocal = "aiueo"
// let counter = 0;
// for (let i = 0; i < kalimat.length; i++) {
//     if (kalimat[i] === "a" || kalimat[i] === "i" || kalimat[i] === "u" || kalimat[i] === "e" || kalimat[i] === "o") {
//         counter++
//     }
// }
// console.log(counter);


let kalimat = "ini memang berat, tapi sabar ini ujian"
let vocal = "aiueo"
let counter = 0;

for (let i = 0; i < vocal.length; i++) {
    for (let j = 0; j <kalimat.length; j++) {
        if (kalimat[j] === vocal[i]) {
            counter++
        }
    }
}
console.log(`terdapat ${counter} huruf`)