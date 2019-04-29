//

let mongoose = require("mongoose");
let Schema = mongoose.Schema;


var Article = new Schema({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    content:{
        type:String,
        required:[true,"Content is required"]
    },
    creatorId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    tags:[{
        type:Schema.Types.ObjectId,ref:"Tag"
    }]},{
        timestamps:true
    });

    module.exports= mongoose.model('Article',Article);
    