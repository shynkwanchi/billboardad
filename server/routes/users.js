const router = require("express").Router();
const { User, validate } = require("../models/user.js");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(400).send({ message: "Email has been registed!" });

    const token = user.jwt;
    res.status(200).send({ data: token, message: "Logged in successfully" });
  } catch (error) {
    res.status(500).send({ messange: "Internal Server Error!" });
  }
});

module.exports = router;