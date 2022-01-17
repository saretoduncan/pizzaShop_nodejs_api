import express from "express";
import { User } from "../models/Useschema.js";
import tokenVerify from "../middleWare/authTokenValidation.js";
import { signUp, logIn } from "../controllers/authController.js";
import {
  signUpValidation,
  validate,
  loginValidation,
} from "../middleWare/validator.js";
/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Create a new user.
 *     requestBody:
 *
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *
 *                     email:
 *                       type: string
 *                       description: The user's name.
 *
 *                     password:
 *                       type: string
 *                       description: password not less than 6 char.
 *
 *                     confirmPassword:
 *                       type: string
 *                       description: must match with the password.
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     username:
 *                       type: integer
 *                       description: The user's name.
 *                       example: Duncan
 *                     email:
 *                       type: string
 *                       description: The user's name.
 *                       example: Leanne Graham
 *
 *
 */
/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: User login
 *     requestBody:
 *
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                     email:
 *                       type: string
 *                       description: The user's name.
 *
 *                     password:
 *                       type: string
 *                       description: password not less than 6 char.
 *
 *
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *
 *                     username:
 *                       type: integer
 *                       description: The user's name.
 *                       example: Duncan
 *                     auth_token:
 *                       type: string
 *                       description: open id token.
 *                       example: jisjdkjijeij9oiujklqjuejhriuq
 *
 *
 */

const routes = express.Router();
//register users
routes.post("/register", signUpValidation(), validate, signUp);
//login a user
routes.post("/login", loginValidation(), validate, logIn);

//get all user
routes.get("/getUserbyToken", tokenVerify, async (req, res) => {
  try {
    const { email, name } = await User.findOne({ _id: req.user._id });
    const user = {
      name: name,
      email: email,
    };
    res.json(user);
  } catch (err) {
    res.json(err.msg);
  }
});
export default routes;
