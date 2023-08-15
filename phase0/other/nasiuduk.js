/**
 * ALGORITMA
 * 
 * 1.dapatkan setiap huruf pada kalimat yang sama dengan kata yang ingin dicari
 * 2. setiap ditemukan maka hitung sebagai tambah 1 pada variable penampung
 * 3. jika sudah semua huruf pada kalimat dicek, maka tampilkan jumlah huruf yang sesuai yang didapat
 * PSEUDOCODE
 * 
 * STORE phrase IN STRING WITH ANY VALUE
 * STORE vocal IN STRING WITH ANY VALUE
 * STORE totalVocal IN STRING WITH ANY VALUE
 * CALCULATE phrase LENGTH with LENGTH BUILT IN FUNCTION
 * STORE length IN NUMBER WITH VALUE OF CALCULATION RESULT
 * FOR index FROM 0 TO length INCREMENT BY 1
 *  IF word INDEX IS SAME VALUE AND SAME TYPE AS vocal
 *      INCREMENT totalVocal BY 1
 *  END IF
 * END FOR
 * DISPLAY totalVocal
 */

// single vocal
let phrase = "aku cinta nasi uduk";
let vocal = "a";
let totalVocalA = 0;
let length = phrase.length

for (index = 0; index < length; index++) {
    if (phrase[index] === vocal) {
        totalVocalA++;
    }
}
console.log(totalVocalA);

//multiple vocal

let phrase2 = "mendaki gunung lewati lembah bersama teman berpetualang";
let vocal2 = "aiueo";
let totalVocal2 = 0;
let length2 = phrase.length

for (let k = 0; k < phrase2.length; k++) {
    for (let j = 0; j < phrase2.length; j++) {
        if (phrase2[k] === vocal2[j]) {
            totalVocal2++
        }
    }
}
console.log(totalVocal2);