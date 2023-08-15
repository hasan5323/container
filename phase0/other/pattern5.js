let row16 = 5;
for (let i = 0; i < row16; i++) {
    let temp = ""
    for (let k = -1; k < row16; k++) {
        for (let j = 0; j < row16; j++) {
            temp += "*"
        }
        temp += " "
    }
    console.log(temp)
}