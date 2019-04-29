//

const express=require("express");
const validate = require("../../middlewares/validation");
const commentService=require("../../controllers/v1/commentService");
const authGaurd = require("../../middlewares/authGaurd");

var router=express.Router();

router.get("/:article",commentService.getByArticle);
router.get("/:user",commentService.getByUser);

router.post("/create",authGaurd.authClientToken,validate.validateCommentBody,commentService.postComment);


module.exports=router;