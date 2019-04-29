//

const express= require("express");
const parser= require("body-parser");
const mongoose=require("mongoose");
const validator= require("express-validator");

module.exports= ()=>{


    let create,start,server=express();

    create=(config,db)=>{
        let routes= require("../routes");


        console.log(config);


        server.set('env',config.env);
        server.set("port",config.port);
        server.set("hostname",config.hostname);

        server.use(parser.json());
        server.use(validator());
        server.use(parser.urlencoded({extended:false}));

        mongoose.connect(db.database,{
            useNewUrlParser:true,
            useCreateIndex:true
        });

        routes.init(server);
    }


    start=()=>{
        let hostname= server.get("hostname"),
        port =server.get("port");

        server.listen(port,()=>console.log("Server is listning on - "+hostname+":"+port));

    };

    return {
        create:create,
        start:start
    };
};