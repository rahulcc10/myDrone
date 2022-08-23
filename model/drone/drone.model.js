const mongoose = require("mongoose")


const Drone = new mongoose.Schema({

identity:{
  type:String,
},
productId: { type: mongoose.Types.ObjectId, ref: "Product" },


// availability:{
//   type:Boolean
// }
},
{ timestamps: true })
module.exports = mongoose.model("Drone", Drone);
