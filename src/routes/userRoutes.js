import express from "express";
import {signUpValidation, validate} from '../middleWare/validator.js'

const routes = express.Router();
routes.post('/register',signUpValidation(),validate,(req,res)=>{
    const {name, email, password,confirmPassword}= req.body
    res.send(success);
})
export default routes;
