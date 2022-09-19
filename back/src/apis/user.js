const express = require("express");
const userSchema = require("../models/user.js");

const router = express.Router();

// Create User
router.post("/users/create", (req, res) => {
  async function run() {
    const user = userSchema(req.body);
    await user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  }
});
// Check if user exists
router.get("/users/:mail", (req, res) => {
  const { mail } = req.params;
  let user = userSchema;
  user
    .find({ username: mail })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Delete existing user
router.delete("/users/delete/:mail", (req, res) => {
  //let user = userSchema(req.body);
  const { mail } = req.params;
  let user = userSchema;
  user
    .find({ username: mail })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Update user
router.put("/users/update/:mail", (req, res) => {
  //let user = userSchema(req.body);
  const { mail } = req.params;
  const { company, country } = req.params;
  let user = userSchema;
  user
    .updateOne({ username: mail }, { $set: { company, country } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
