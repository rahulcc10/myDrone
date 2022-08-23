const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  name: { type: String },
  quantity: { type: Number },
  warehouseId:{
    type:mongoose.Types.ObjectId,
    ref:"Warehouse"
  }
},
{ timestamps: true });
module.exports = mongoose.model("Product", Product);
