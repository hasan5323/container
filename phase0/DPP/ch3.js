function slice(data, start, end) {
  // Insert your code here
  if (!data) {
    // disini salah harusnya ada !
    return `Invalid Data`;
  } else {
    if (!start) {
      start = 0;
    }
    if (!end) {
      end = data.length;
    }
    let result = []
    for (let  i = start; i < end; i++) {
        result.push(data[i])
    } // for mulai dari i sama dengan start i diincrement sampai i kurang dari end
    return result;
  }
}

console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 2)); // [ 'camel', 'duck', 'elephant' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 2, 4)); // [ 'camel', 'duck' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 20)); //[]
console.log(slice()); //Invalid data

module.exports = slice;
