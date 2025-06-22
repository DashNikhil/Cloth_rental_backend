const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
  },
});

module.exports = mongoose.model("subscribers", subscriberSchema);
