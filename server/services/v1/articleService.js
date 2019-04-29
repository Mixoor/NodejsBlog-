//
const {validationResult} =require("express-validator/check");

const articleModel=require("../../models/article");
const userModel= require("../../models/user");
const tagModel = require("../../models/tag");

const getArticleByid= async(req,res,next)=>{
    const id = req.params["id"];

    if(!id){
        return res.Status(401).json({
            "errors":{
                "msg":"Article id invalid"
            }
        });

    }
    try{
    const article= await articleModel.findById(id);
    
    const creator= await userModel.findById(article.creatorId);

    if(!article || !creator)
        return res.status(401).json({
            "errors":{
                "msg":"Article inavailable"
            }
        });

    const tags= article.tags.map(t=>{return tagModel.findById(t)});

    return res.status(200).json({
        "success":{
            "article":article,
            "creator":creator,
            "tags":tags
        }
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

const getAll =async (req,res,next)=>{


    try{
        const articles= await articleModel.find({});

        if(!(articles && articles.length>0))
            return res.status(401).json({
                "errors":{
                    "msg":"Article inavailable"
                }
            });
         
    return res.status(200).json({
        "success":{
            "articles":articles
        } 
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


const saveArticle = async(req,res,next)=>{
    console.log(req.user);
    
    const {title,content,tags}=req.body;
    const {user}= req;

    try{

        const ar= await articleModel.create({title,content,tags:tags,creatorId:user._id});
        console.log(ar);



        
        
        
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
    saveArticle:saveArticle,
    getAll:getAll,
    getArticleByid:getArticleByid
}

