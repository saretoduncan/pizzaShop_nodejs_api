import { User } from "../models/Useschema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//signup
export const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  //validate if email exists
  const emailExitst = await User.findOne({ email: email });
  if (emailExitst) return res.status(400).json("email already exists");
  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  //create new user from the schema
  const user = new User({
    name: name,
    email: email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save(); //save user to db
    res.json(savedUser);
  } catch (err) {
    res.json(err.message);
  }
};
//login
export const logIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user)
    return res.status(400).json("Email is not registered to our system");
  //check password is correct
  const correctPassword = await bcrypt.compare(password, user.password);
  if (!correctPassword) return res.status(400).json("password is incorrect");
  // generate token
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  const userInfo = [
    {
      name: user.name,
      auth_token: token,
    },
  ];

  res.header("auth_token").json(userInfo);
};
