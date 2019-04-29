//

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var Tag = new Schema(
    {
        name:{
            type:String,
            required:[true,"Name of tag is required"]
        },
        content:{
            type:String,
            required:[true,"Content is required"]
        }

},{
    timestamps:true
});

module.exports= mongoose.model("Tag",Tag);