const mongoose = require("mongoose");

//
/**
 * dejar solo info basica de usuario,
 * compañiaid(puede tener mas de una)
 * rol de compañia(owner, admin, user(comun solo ve los links catalogos))
 * esquema de compañia con id, roles(usuarios por rol)
 * catalogo dentro del esquema compañia o esquema separado de catalogos vinculados por id compañia
 */

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
  rol: { type: String, default: "user" },
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
