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
routes.get("/getUserbyToken", tokenVerify, async (req, res) => {
  try {
    const user = await User.findOne({_id:req.user._id});
    
    res.json(user);
    
  } catch (err) {
    res.json(err.msg);
  }
});
export default routes;
