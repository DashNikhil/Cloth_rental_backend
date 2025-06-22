const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  ClothId: { type: String },
  cType: String,
  drop: String,
  pdate: String,
  d_date: String,
  d_time: {
    type: String,
    default: "10 AM",
  },
  ptime: {
    type: String,
    default: "10 AM",
  },
  status: {
    type: String,
    default: "pending",
  },
  price: {
    type: String,
    default: "COD",
  },
  QT: {
    type: Number,
    default: 1,
  },
  credentials: {
    type: String,
    default: "COD",
  },
});

module.exports = mongoose.model("Book", BookSchema);
