const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/router");
//middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); //body parses
app.use(express.static(__dirname + '/public'));
// handler
app.use(router);
//listener
app.listen(port, () => {
  console.log(`app opened in localhost:${port}`);
});

/*
npm init -y
npm i express pg
touch .gitignore => node_modules
copy temlate hello weorld di wesbsite epress.js ke app.js
install nodemon devedepedencies lglobal
masukkan routing sesuai permintaan soal
pisah routing ( guide routing - paling bawah)
cicil class
cicil sql query
*/
