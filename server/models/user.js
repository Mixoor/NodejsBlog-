

let mongoose =require("mongoose");
let Schema = mongoose.Schema;


var User  = new Schema( {
    name:{
        type:String,
        required:[true,"Name is required"],
        lowercase:true
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    picture:{
        type:String,
        required:[true,"Picture is required"]
    }
    },{
        timestamps:true
    });

    module.exports= mongoose.model('User',User);