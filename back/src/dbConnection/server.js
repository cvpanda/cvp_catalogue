require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const userRoutes = require("../apis/user.js");
const port = process.env.PORT;

// Middleware
app.use(express.json());
app.use("/api", userRoutes);
// Routes
app.get("/", (req, res) => {
  res.send("Welcome to your easy to create catalog");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to mongoDB"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("server listening to port", port));
