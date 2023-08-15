function gradeScore(nama, nilai1, nilai2, nilai3) {
    let ave =   (nilai1+nilai2,nilai3)/3;
    let grade = ""
    if (ave >= 80) {
        grade = `A`
    } else if (ave >= 70 && ave < 80) {
        grade = `B`
    } else if (ave < 70) {
        grade = `C`
    }   
    return `Selamat ${nama}, grade kamu adalah ${grade} `
    }


console.log(gradeScore("Meri", 75, 75, 75)); //Selamat Meri, grade kamu adalah B

console.log(gradeScore("Budi", 80, 90, 100)); // Selamat Budi, grade kamu adalah A,

console.log(gradeScore("Sifa", 40, 50, 60)); // Selamat Sifa, grade kamu adalah C