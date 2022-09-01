const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _idUser: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  username: { type: String, required: true },
  password: { type: String, required: true },
  company: { type: String, default: "" },
  companyLogo: { type: String, default: "logoavatar" },
  catalogue: {
    title: { type: String, default: "New catalogue" },
    items: [
      {
        _idItem: {
          type: mongoose.Schema.Types.ObjectId,
          index: true,
          required: true,
          auto: true,
        },
        description: String,
        image: { type: String, required: true },
      },
    ],
    activeCatalogue: { type: Boolean, default: false },
  },
  country: { type: String, default: "" },
  lastUpdate: { type: Date, default: Date.now },
  activeUser: Boolean,
});

module.exports = mongoose.model("User", userSchema);
