const mongoose = require("mongoose");

const Command_Center = mongoose.Schema({
    instruction:{
    type:String,
}
},
{ timestamps: true });

module.exports = mongoose.model("Command_Center", Command_Center);
