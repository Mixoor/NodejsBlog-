//

const express=require("express");
const jwt = require("jsonwebtoken");
const config=require("../configs/local");


//function chech the token 
const authClientToken =async(req,res,next)=>{
    let token = req.headers["authorization"];

    if(!token){
        return res.status(401).json({
            "errors":[{
                "msg":"Token is required"
            }]
        });
    }

    jwt.verify(token,config.secret,(err,decoded)=>{
        if(err){
            return res.status(401).json({
                "errors":[{
                    "msg":"Token invalid"
                }]
            });
        }

        req.user=decoded;

        console.log(decoded);
        return next();
    });
}

module.exports={
    authClientToken:authClientToken
}