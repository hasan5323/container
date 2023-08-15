let input1 = "abcde"
let input2 = "zx"

for (let i = 0; i < input1.length; i++) {
    for (let j = 0; j < input2.length; j++) {
        console.log(`Loop Luar - ${input1[i]} || Loop Dalam - ${input2[j]}`);
    }
}