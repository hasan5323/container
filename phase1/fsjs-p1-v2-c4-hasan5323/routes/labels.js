const express = require('express')
const router = express.Router()
const Controller = require("../controllers/controller");


router.get("/labels", Controller.labelList);
//detail
router.get("/labels/detail", Controller.labelsDuration);

module.exports = labels