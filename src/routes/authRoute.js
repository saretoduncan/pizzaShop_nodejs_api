import express from "express";
import { User } from "../models/Useschema.js";
import tokenVerify from "../middleWare/authTokenValidation.js"
import { signUp,logIn } from "../controllers/authController.js";
import { signUpValidation, validate,loginValidation } from "../middleWare/validator.js";

const routes = express.Router();
//register users
routes.post("/register", signUpValidation(), validate,signUp )
//login a user 
routes.post("/login",loginValidation(),validate,logIn);

//get all user
routes.get("/getAllUsers",  async (req, res) => {
  try {
    const allUsers = await User.find();
    console.log(req.user._id)
    res.json(allUsers);
    
  } catch (err) {
    res.json(err.msg);
  }
});
export default routes;
