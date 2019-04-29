//

const tagModel = require("../../models/tag");
const {validationResult} =require("express-validator/check");



const getAll=async(req,res,next)=>{

    try{
        const tags = await tagModel.find({});


        if(tags)
        throw new error();


        return res.status(200).json(
            {
                "tags":tags
            }
        );


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

const saveTag=async(req,res,next)=>{
    const errors= validationResult(req);


    if(!errors.isEmpty)
    return res.status(401).json({
        "errors":errors.array()
    });
    const {name,content} =req.body; 

    try{


        const tag  = await tagModel.create({name:name,content:content});

        return res.status(200).json({
            "tag":tag
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
    saveTag:saveTag,
    getAll:getAll
}