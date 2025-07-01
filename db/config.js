const mongoose = require("mongoose");
require("dotenv").config();

// const dbUrl = "mongodb://127.0.0.1:27017/car-rental";
const dbUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/car-rental";

const connectDb = () => {
  mongoose
    .connect(dbUrl)
    .then(() => console.log("Mongodb connection successful"))
    .catch((err) => console.log("Error occured while fetching data"));
};

module.exports = connectDb;
