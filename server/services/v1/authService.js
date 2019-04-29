//
const bcrypt= require("bcryptjs");
const jwt = require('jsonwebtoken');
const  {validationResult} =require("express-validator/check");

const config= require("../../configs/local");
const userModel = require("../../models/user");

const register= async (req,res,next)=>{

    console.log("register");
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({errors:errors.array()});
    }

    let {name,email,password,picture}=req.body;

    let isAvailble = await userModel.findOne({"email":email});

    if(isAvailble){
        return res.status(500).json({
            "errors":[{
                "msg":"email already exists"
            }]
        });
    }

    let dcrytedPassword = await bcrypt.hash(password,8);

    try{

        let user = await userModel.create({
            name:name,
            email:email,
            password:dcrytedPassword,
            picture:picture
        });
        if(!user)
            throw new error("Authentification problem");
        
            return res.status(201).json({
                "success" : [{
                    "msg" : "user registered successfully"
                }]
            });

    }catch(err){


        return res.status(500).json({
            "errors":[{
                "msg":"Problem was detected in the registration"
            }]
        });

    }
}


const login = async (req,res,next)=>{
    
    const errors= validationResult(req);

    if(!errors.isEmpty){
        return res.status(422).json({
            errors:errors.array()
        });
    }

    let {email,password}= req.body;

    try{
        let isUser = await userModel.findOne({"email":email});
        let isPassword= await bcrypt.compare(password,isUser.password);

        if(!(isUser && isPassword)){
            return res.status(401).json({
                "errors":[{
                    "msg":"email/password is wrong "
                }]
            });
        }

        let token = jwt.sign({id:isUser._id},config.secret,{expiresIn:86400});

        return res.status(200).json({
            "success":[{
                "name":isUser.name,
                "token":token,
                "expiresIn":86400
            }]
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
    register:register,
    login:login
}