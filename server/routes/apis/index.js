//
const express =require("express");
const  apiController = require("./v1");
let router= express.Router();
router.use("/v1",apiController);

module.exports= router;