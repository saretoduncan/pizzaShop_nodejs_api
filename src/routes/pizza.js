import express from "express";
import { upload } from "../utils/multer.js";

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
routes.post("/", upload.single("pizzaImg"), addPizza); //add pizza
routes.get("/", getAllPizza); //get all pizza
routes.get("/:id", getPizzaById); //get pizza by id
routes.patch("/update/:id", updatePizza); //update pizza
routes.delete("/:id", deleteById); // delete pizza by id
routes.delete("/", deleteAllPizza); //delete all pizza

export default routes;
