const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/client_project")
  .then(() => {
    console.log("Database Connect Successfully");
  })
  .catch(() => {
    console.log("Unable to Connect Database");
  });
