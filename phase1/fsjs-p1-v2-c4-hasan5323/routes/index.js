const express = require('express')
const router = express.Router()
const Controller = require("../controllers/controller");
const { labels } =require("./labels")
const { songs } = require("./songs")

router.get("/",Controller.default);
router.use("/labels", labels)
router.use("/songs", songs)