import express from "express";

import tokenVerify from "../middleWare/authTokenValidation.js";
import {
  addToCart,
  getAllCart,
  getUserCart,
  deleteAll,
  deleteCartByid,
  getCartDataById,
  deleteCartByAuth,
  totalAmount,
  payment,
} from "../controllers/cartController.js";

const routes = express.Router();
routes.post("/", tokenVerify, addToCart);
routes.get("/all", getAllCart);
routes.get("/all/:id", getCartDataById);
routes.get("/user", tokenVerify, getUserCart);
routes.delete("/user/:id", tokenVerify, deleteCartByAuth);
routes.delete("/all", deleteAll);
routes.delete("/all/:id", deleteCartByid);
routes.get("/user/total", tokenVerify, totalAmount);
routes.get("/user/payment",tokenVerify,payment)

export default routes;
