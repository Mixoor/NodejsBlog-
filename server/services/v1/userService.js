//

const userModel = require("../../models/user");

const getUserDetails = async (req,res,next)=>{

    const userId= req.params["id"];

    console.log(req);

    if(!userId){
        return res.status(422)
            .json({
                "errors":{
                    "msg":"User id invalid"
                }
            });
    }
    try{

   await userModel.findById(userId).select("-password").exec((err,user)=>{
        if(err){
            return res.status(401).json({
                "errors":{
                    "msg":"User not available"
                }
            });
        }

        delete user.password;

        return res.status(200).json({
            "success": {
                "user" : user
            }
        });
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

module.exports={
    getUserDetails:getUserDetails
}

