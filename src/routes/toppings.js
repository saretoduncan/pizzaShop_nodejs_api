import express from "express";
import {
  addToppings,
  getAllToppings,
  getToppingById,
  updateToppings,
  deleteById,
  deleteAllToppings,
} from "../controllers/toppingController.js";

const routes = express.Router();
routes.post("/", addToppings);
routes.get("/", getAllToppings);
routes.get("/:id", getToppingById);
routes.patch("/update/:id", updateToppings);
routes.delete("/:id", deleteById);
routes.delete("/", deleteAllToppings);
/**
 * @swagger
 * /api/toppings:
 *   get:
 *     summary: get all toppings.
 *
 *     responses:
 *       200:
 *         description: toppings.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *
 */
export default routes;
