//

const api =require("./apis");


const init= (server)=>{
    server.get("*",(req,res,next)=>{
        console.log("Request was made to : "+req.orginalUrl);
        return next();
    });
    server.use("/api",api);
}

module.exports= {
    init:init
};


