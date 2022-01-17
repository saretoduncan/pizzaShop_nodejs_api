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
routes.get("/user/payment", tokenVerify, payment);
/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: add items to cart.
 *     parameters:
 *       - in: header
 *         name: auth_token
 *         required: true;
 *         description: authtoken
 *         schema:
 *           type: string
 *     requestBody:
 *
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *
 *                     pizzaId:
 *                       type: string
 *                       description: The user's name.
 *
 *                     pizzaSize:
 *                       type: integer
 *                       description: The user's name.
 *
 *                     toppingId:
 *                       type: integer
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
 *
 *
 *
 */
/**
 * @swagger
 * /api/cart/user:
 *   get:
 *     summary: get cart items.
 *     parameters:
 *       - in: header
 *         name: auth_token
 *         required: true;
 *         description: authtoken
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: All users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *
 */

/**
 * @swagger
 * /api/cart/user/{id}:
 *   delete:
 *     summary: delete cart item by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true;
 *         description: cart id
 *         schema:
 *           type: string
 *       - in: header
 *         name: auth_token
 *         required: true;
 *         description: authtoken
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: All users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *
 */
/**
 * @swagger
 * /api/cart/user/total:
 *   get:
 *     summary: get total amount .
 *     parameters:
 *       - in: header
 *         name: auth_token
 *         required: true;
 *         description: authtoken
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: total cost.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *
 */
/**
 * @swagger
 * /api/cart/user/payment:
 *   get:
 *     summary: payment.
 *     parameters:
 *       - in: header
 *         name: auth_token
 *         required: true;
 *         description: authtoken
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: payment.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *
 */
/**
 * @swagger
 * /api/cart/user/{id}:
 *   delete:
 *     summary: delete cart item by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true;
 *         description: cart id
 *         schema:
 *           type: string
 *       - in: header
 *         name: auth_token
 *         required: true;
 *         description: authtoken
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: All users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *
 */

export default routes;
