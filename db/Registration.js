const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: [true, "Please Enter Your Name"],
  },
  name: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

module.exports = mongoose.model("registrations", registerSchema);
