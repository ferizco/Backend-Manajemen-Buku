const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    nama: { type: String, required: true },
    email: { type: String, required: true },
    nohp: { type: String, required: true },
    alamat: { type: String, required: true },
  },
  { collection: "pelanggan" }
);

module.exports = mongoose.model("UserModel", UserSchema);
