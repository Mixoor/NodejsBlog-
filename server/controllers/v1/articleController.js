//
const express= require('express');
const articleService = require('../../services/v1/articleService');
const validate = require("../../middlewares/validation");
const authGaurd= require('../../middlewares/authGaurd');

const router = express.Router();

router.get("/:id",articleService.getArticleByid);
router.get("/all",articleService.getAll);
//router.get("/tag/:tag",articleService.getByTag);

router.post("/create",authGaurd.authClientToken,validate.validateArticleBody(),articleService.saveArticle);



module.exports= router;

