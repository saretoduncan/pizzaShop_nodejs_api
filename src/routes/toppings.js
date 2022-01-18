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

export default routes;
