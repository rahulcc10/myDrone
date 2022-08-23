const mongoose = require("mongoose");

const Instructions = mongoose.Schema(
  {
    title: String,
    destAddress: String,
    productId: { type: mongoose.Types.ObjectId, ref: "Product" },
    droneId: { type: mongoose.Types.ObjectId, ref: "Drone" },
    warehouseId: { type: mongoose.Types.ObjectId, ref: "Warehouse" },
    qty: Number,
    status: { type: String, default: "unpicked" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Instructions", Instructions);
