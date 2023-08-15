
let input1 = "abcde"
let input2 = "zx"
let text = ''
for (let i = 0; i < input1.length; i++) {
    console.log(`== LOOP 1 - INDEX ${i}. VALUE ${input1[i]} ==`)
    for (let j = 0; j < input2.length; j++) {
        console.log(`|| Loop 2 - Index ${j}. value ${input2[j]} ||`)
    }
}