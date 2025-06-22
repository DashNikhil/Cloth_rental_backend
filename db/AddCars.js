const mongoose = require("mongoose");

const addSchema = new mongoose.Schema({
  imgUrl: String,
  carname: String,
  carprice: Number,
});

module.exports = mongoose.model("addCars", addSchema);
