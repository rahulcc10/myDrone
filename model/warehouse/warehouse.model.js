const mongoose = require("mongoose")


const Warehouse = new mongoose.Schema({

name:{
  type:String,
},

},
{ timestamps: true })
module.exports = mongoose.model("Warehouse", Warehouse);
