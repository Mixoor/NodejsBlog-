//

var mongoose = require("mongoose");
let Schema  = mongoose.Schema;


var Comment = new Schema({
    content :{
        type: String,
        required:[true,"Comment is required"]
    },
    creatorId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    articleId :{
       type:Schema.Types.ObjectId,
       ref:"Article" 
    }
},
    {
        timestamps:true
});

module.exports= mongoose.model("Comment",Comment);