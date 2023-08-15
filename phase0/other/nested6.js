let row = 7
let mod = row % 2;
let midRow = 3;
for (let i = 0; i < row; i++) {
    let temp = ""
    for  (let j = 0; j < row; j++) {
        if (i === midRow) {
            temp += "- "
        } else if (i === 1 || i === 6) {
            temp += "# "


        } else {
            temp += "= "

        }
    }   
    console.log(temp)
}
