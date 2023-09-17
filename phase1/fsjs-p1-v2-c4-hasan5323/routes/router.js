const express = require('express')
const router = express.Router()
const Controller = require("../controllers/controller");


// COMMAND
router.get("/",Controller.default);
router.get("/labels", Controller.labelList);
router.get("/labels/detail", Controller.labelsDuration);
router.get("/songs", Controller.songList);
router.get("/songs/add", Controller.formAddSong);
router.post("/songs/add", Controller.addSong);
router.get("/songs/:id", Controller.songById);
router.get("/songs/:id/edit", Controller.formEditSongById);
router.post("/songs/:id/edit", Controller.editSongById);
router.get("/songs/:id/delete", Controller.deleteSongById);


module.exports = router