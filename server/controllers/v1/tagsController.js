//

const express= require('express');
const tagService = require('../../services/v1/tagService');
const validate = require("../../middlewares/validation");
const authGaurd= require('../../middlewares/authGaurd');

var router= express.Router();

router.get("/all",tagService.getAll);

router.post("/create",authGaurd.authClientToken,validate.validateTagBody(),tagService.saveTag);



module.exports=router;

