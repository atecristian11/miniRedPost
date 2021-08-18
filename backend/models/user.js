const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  cedula: String,
  edad: Number,
  ciudad: String,
  password: String,
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

userSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      cedula: this.cedula,
      edad: this.edad,
      ciudad: this.ciudad,
      iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT
  );
};

const user = mongoose.model("user", userSchema);
module.exports = user;
