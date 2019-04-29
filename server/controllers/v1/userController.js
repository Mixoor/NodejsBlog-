//

const express= require("express");
const userService = require("../../services/v1/userService");

const authClientRequest = require("../../middlewares/authGaurd");

let router = express.Router();

router.get("/:id",authClientRequest.authClientToken,userService.getUserDetails );






module.exports=router;