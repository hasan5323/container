const express = require('express')
const router = express.Router()
const Controller = require("../controllers/controller");


router.get("/songs", Controller.songList);
//add
router.get("/songs/add", Controller.formAddSong);
router.post("/songs/add", Controller.addSong);
//read
router.get("/songs/:id", Controller.songById);
//edit
router.get("/songs/:id/edit", Controller.formEditSongById);
router.post("/songs/:id/edit", Controller.editSongById);
//delete
router.get("/songs/:id/delete", Controller.deleteSongById);


module.exports = { songs }