let row16 = 5;
for (let i = 0; i < row16; i++) {
    let temp = ""
        for (let j = 0; j < row16-1; j++) {
            temp += " "
        }
        for (let k = 0; k < row16; k++) {
            temp += "*"
        }
    console.log(temp)
}