//


const userController = require("../../controllers/v1/userController");
const authController = require ("../../controllers/v1/authController");
const articleController= require("../../controllers/v1/articleController");

const express= require("express");
let router  = express.Router();
router.use('/profile',userController);
router.use('/auth',authController);
router.use('/article',articleController);

module.exports=router;


