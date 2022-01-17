import express from "express";

import {
  addPizza,
  getAllPizza,
  updatePizza,
  getPizzaById,
  deleteById,
  deleteAllPizza,
} from "../controllers/pizzaController.js";
/** pizza */
const routes = express.Router();
routes.post("/", addPizza); //add pizza
routes.get("/", getAllPizza); //get all pizza
routes.get("/:id", getPizzaById); //get pizza by id
routes.patch("/update/:id", updatePizza); //update pizza
routes.delete("/:id", deleteById); // delete pizza by id
routes.delete("/", deleteAllPizza); //delete all pizza
/**
 * @swagger
 * /api/pizza:
 *   get:
 *     summary: get all pizza.
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

export default routes;
