/*
    buatlah sebuah function split yang akan menerima 2 parameter, str (string) dan param (string). Function ini berfungsi untuk memisahkan string menjadi array dimana param adalah parameter pemisahnya.

    contoh
    input: 
    - str: 'i love javascript'
    - param: ' '
    output: ['i', 'love', 'javascript'];

    contoh 2
    input:
    - str: 'javascript is so cool'
    - param: 'i'
    output: ['javascr', 'pt ', 's so cool']

    // s so cool
    // [javascr, pt , s so cool]
*/

function split(str, param) {
  //tulis kode disini
  let arr = [];
  let kata = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === param) {
      arr.push(kata); // container checkout to array
      kata = "";
    } else {
      kata += str[i]; // add words to container
    }
  }
  arr.push(kata); // push the last word that nove no param
  return arr;
}

console.log(split("i love javascript", " ")); // ['i', 'love', 'javascript']
console.log(split("javascript is so cool", "i")); // ['javascr', 'pt ', 's so cool']
