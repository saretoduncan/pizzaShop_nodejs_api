import express from "express";

import {
  addPizza,
  getAllPizza,
  updatePizza,
  getPizzaById,
  deleteById,
  deleteAllPizza,
} from "../controllers/administrationController.js";
/** pizza */
const routes = express.Router();
routes.post("/pizza", addPizza); //add pizza
routes.get("/pizza", getAllPizza); //get all pizza
routes.get("/pizza/:id", getPizzaById); //get pizza by id
routes.patch("/pizza/update/:id", updatePizza); //update pizza
routes.delete("/pizza/:id", deleteById); // delete pizza by id
routes.delete("/removePizza", deleteAllPizza); //delete all pizza
/**toppings */

export default routes;
