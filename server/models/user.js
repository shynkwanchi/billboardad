const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { string } = require("joi");

const userSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  phone: { type: String, require: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
      email: Joi.string().email().required().label("Email"),
      password: passwordComplexity().required().label("Password"),
      retypepass: Joi.string().required().label("Retype Password"),
      phone: Joi.string().required().label("Phone Number"),
    });
    return schema.validate(data)
};

module.exports = { User, validate }
