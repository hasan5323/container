var name = "Joko";
var role = "member lama";
var birthMonth = "januari";
//  your code here

if(name === ""){
    console.log(`Nama tidak boleh kosong!`);
} else {
    if(role !== "member baru" && role !== "member lama") {
        console.log(`Selamat datang di Bikilipik, ${name}. Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu.`);
    } else if(role === "member baru") { // operatornya harusnya === bukan =
        if(birthMonth === "Januari" || birthMonth === "januari") {
            console.log(`Selamat ${name}!. Anda berhak mendapatkan voucher diskon sebesar 50%!`);
        } else {
            console.log(`Maaf ${name}, voucher diskon hanya untuk yang lahir di bulan Januari.`);
        }
    } else if(role === "member lama") {  // operatornya harusnya === bukan = 
        if(birthMonth === "Januari" || birthMonth === "januari") {
            console.log(`Selamat ${name}!. Anda berhak mendapatkan voucher diskon sebesar 30%!`);
        } else {
            console.log(`Maaf ${name}, voucher diskon hanya untuk yang lahir di bulan Januari.`);
        }
    }
}
/*
    EXPECTED OUTPUT
    Benar : Selamat ${name}!. Anda berhak mendapatkan voucher diskon sebesar 30%!

    Salah : Selamat ${name}!. Anda berhak mendapatkan voucher diskon sebesar 50%!
*/