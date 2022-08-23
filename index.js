const mongoose = require("mongoose");
const express = require("express");
const { Router } = require("express");
const controller = require("./Controller/controller");

require("./model/command_center/connamd_center.model");
require("./Database/db");
require("./model/drone/drone.model");
require("./model/instruction/instruction.model");
require("./model/product/product.model");
require("./model/warehouse/warehouse.model");
require("./model/command_center/connamd_center.model");

const Drone = mongoose.model("Drone");
const Command_Center = mongoose.model("Command_Center");
const Instructions = mongoose.model("Instructions");
const Product = mongoose.model("Product");
const Warehouse = mongoose.model("Warehouse");

const app = express();
app.use(express.json());

app.post("/create_drone", async (req, res) => {
  try {
    const result = await Drone(req.body).save();
    res.status(200).json({
      status: 200,
      message: "Drone Created Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Unable to create Drone",
    });
  }
});

app.post("/create_warehouse", async (req, res) => {
  try {
    const result = await Warehouse(req.body).save();
    res.status(200).json({
      status: 200,
      message: "Warehouse Added Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Unable to create Warehouse",
    });
  }
});

app.post("/create_product", async (req, res) => {
  try {
    const result = await Product(req.body).save();
    res.status(200).json({
      status: 200,
      message: "Product Added Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Unable to add Product",
    });
  }
});

app.post("/send_command", async (req, res) => {
  try {
    const send_command = await Instructions(req.body).save();
    res.status(200).json({
      status: 200,
      message: "Pick up command sent Successfully",
      data: send_command,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Unable to send command",
    });
  }
});

app.post("/pick_drone/:droneId", async (req, res) => {
  try {
    let data = await Instructions.findOneAndUpdate(
      {droneId: req.params.droneId},      
      { $set:{status:"Picked"} }
    );
    if(data){
      let result = await Instructions.findById(data._id)
      res.status(200).json({
        status: 200,
        message: "Pick item Successfully",
        data: data,
      });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 500,
      message: "Unable to pickup Item",
    });
  }
});

app.post("/unload_item/:droneId", async (req, res) => {
  try {
    let data = await Instructions.findOneAndUpdate(
      {droneId: req.params.droneId},      
      { $set:{status:"Delivered"} }
    );
    if(data){
      
      let result = await Instructions.findById(data._id)
      res.status(200).json({
        status: 200,
        message: "delivered Successfully",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Unable to pickup Item",
    });
  }
})

app.listen(3000, () => {
  console.log("Connected");
});
