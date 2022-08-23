const express = require("express");
const userSchema = require("../models/user.js");

const router = express.Router();

// Create User
router.post("/users/create", (req, res) => {
  let user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
