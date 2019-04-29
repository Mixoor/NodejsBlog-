//

const commentModel = require("../../models/comment");
const {validationResult}  =require("express-validator/check");

const getByArticle = (req, res, next) => {
    const id = req.params["article"];

    if (!id)
        return res.status(401).json({
            "errors": {
                "msg": "Id invalid"
            }
        });

    try {

        const comment = await commentModel.find({
            articleId: id
        });


        if (!comment)
            return res.status(401).json({
                "errors": {
                    "msg": "No Comment inavailable"
                }
            });

        return res.status(200).json({
            "comments": comment
        });

    } catch (err) {
        return res.status(500).json({
            "errors": [{
                "msg": "Connection Problem ,Please try again "
            }]
        });
    }

}

const getByUser =async (req, res, next) => {
    const id = req.params["article"];

    if (!id)
        return res.status(401).json({
            "errors": {
                "msg": "Id invalid"
            }
        });

    try {

        const comment = await commentModel.find({
            articleId: id
        });


        if (!comment)
            return res.status(401).json({
                "errors": {
                    "msg": "No Comment inavailable"
                }
            });

        return res.status(200).json({
            "comments": comment
        });

    } catch (err) {
        return res.status(500).json({
            "errors": [{
                "msg": "Connection Problem ,Please try again "
            }]
        });
    }
}



const postComment=async (req,res,next)=>{
    const {user}=req;
    const errors = validationResult(req);

    if(!errors.isEmpty){
        return res.status(422).json({
            errors:errors.array()
        });
    }

    let {content,articleId}= req.body;



    try{

        let comment =await commentModel.create({
            content:content,
            creatorId:user._id,
            articleId:articleId
        });
        
        if(!comment)
        throw new error();

        return res.status(200).json({
            "comment":comment
        });



    }catch(err){
        return res.status(500).json(
            {
                "errors":[{
                    "msg":"Connection Problem ,Please try again "
                }]
            }
        );

    }
}

module.exports= {
    getByArticle:getByArticle,
    postComment:postComment,
    getByUser:getByUser
}