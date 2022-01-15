import express from "express";
import { User } from "../models/Useschema.js";
import { signUpValidation, validate,loginValidation } from "../middleWare/validator.js";
import bcrypt from 'bcrypt'

const routes = express.Router();
//register users
routes.post("/register", signUpValidation(), validate, async (req, res) => {
  const { name, email, password } = req.body;
 
  //validate if email exists
 const emailExitst= await User.findOne({email:email})
 if(emailExitst) return res.status(400).json("email already exists");
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
    const savedUser = await user.save();//save user to db
    res.json(savedUser);
  } catch (err) {
    res.json(err.message);
  }
});
//get all user
routes.get("/getAllUsers",async(req, res)=>{
    try{
        const allUsers = await User.find();
    res.json(allUsers)
    }catch(err){
       res.json(err.msg);
    }
})
//login a user 
routes.post("/login",loginValidation(),validate,(res,req)=>{
    
})
export default routes;
