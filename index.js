const express = require("express");
const cors = require("cors");

const registerSchema = require("./db/Registration");
const contactSchema = require("./db/Contact");
const subscriberSchema = require("./db/Subscriber");
const addSchema = require("./db/AddCars");
const Bookings = require("./db/Book");
require("./db/config");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/cars", (req, res) => {
  res.send("connection stablished successfully");
});

app.post("/registration", async (req, res) => {
  let user = new registerSchema(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  // console.log(req.body);
  res.send({ result: result });
});

app.post("/login", async (req, res) => {
  let user = await registerSchema.findOne(req.body);
  if (user) {
    user = user.toObject();
    delete user.password;
    // console.log(req.body);
    res.send({ result: user });
  } else {
    res.send("No user found!");
  }
});

app.post("/contact", async (req, res) => {
  let user = new contactSchema(req.body);
  let result = await user.save();
  result = result.toObject();
  res.send({ result: result });
});

app.post("/subscriber", async (req, res) => {
  let user = new subscriberSchema(req.body);
  let result = await user.save();
  // console.log(typeof result);
  res.send({ result: result });
});

app.post("/addCars", async (req, res) => {
  let user = new addSchema(req.body);
  let result = await user.save();
  result = result.toObject();
  res.send({ result: result });
  // res.send(req.body);
});

app.post("/book", async (req, res) => {
  // console.log(req.body);
  let user = new Bookings(req.body);
  let result = await user.save();
  result = result.toObject();
  res.send({ result: result });
  // res.send("Code is working");
});

app.get("/book", async (req, res) => {
  let user = await Bookings.find({});
  if (user) {
    res.send({ result: user });
  } else {
    res.send("No Bookings found !");
  }
});

app.get("/addCars", async (req, res) => {
  let user = await addSchema.find();
  if (user) {
    res.send({ result: user });
  } else {
    res.send("No user found!");
  }
});

app.put("/book", async (req, res) => {
  const { ClothId, status } = req.body;
  // console.log(ClothId, status);
  let user = await Bookings.findOneAndUpdate(
    { ClothId },
    { $set: { status } },
    { new: true }
  );
  if (user) {
    res.send({ message: "Status updated successfully" });
  } else {
    res.send({ message: "Status does not updated" });
  }
});

app.patch("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await registerSchema.findOneAndUpdate(
    { email },
    { $set: { password } },
    {
      new: true,
    }
  );
  if (user) {
    res.send({ result: "Password updated successfully" });
  } else {
    res.send({
      message: "No user found for this email, Please enter a valid email",
    });
  }
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, " +
        "and App is listening on port " +
        PORT
    );
  else console.log("Error occurred, server can't start", error);
});
