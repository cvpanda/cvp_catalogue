require("dotenv").config();

const express = require("express");
const app = express();

app.set("view engine", "ejs");
const port = process.env.PORT;

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to your easy to create catalog");
});

app.listen(port, () => console.log("server listening to port", port));
