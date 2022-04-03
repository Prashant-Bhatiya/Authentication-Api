const { use } = require("..");
const User = require("../models/user.model");

const jwt = require("jsonwebtoken");

require("dotenv").config()

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY );
};

const Register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      res.status(400).send({ message: "Email is already Registered" });
    }

    user = await User.create(req.body);

    const token = generateToken(user);

    res.status(200).send({ user: user, token });
  } catch (error) {
    console.log(error);

    res.status(500).send({ msg: error.msg });
  }
};

const Login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).send("Wrong Email or Password");
    }

    const match = user.checkPassword(req.body.password);

    if (!match) {
      return res.status(400).send("Wrong Email or Password");
    }

    const token = generateToken(user);

    res.status(200).send({ user: user, token });
  } catch (error) {
    console.log(error);

    res.status(500).send({ msg: error.msg });
  }
};

module.exports = { Register, Login };
