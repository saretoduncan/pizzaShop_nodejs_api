//implement require in es6
import express from "express";
import userRoutes from "./src/routes/authRoute.js";
import toppingRoutes from "./src/routes/toppings.js";
import cartRoutes from "./src/routes/cart.js";
import pizzaRoutes from "./src/routes/pizza.js";
import mongoDb from "./db.js";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { apiDocumentation } from "./src/docs/apidocs.js";
import { adminRouter, adminJs } from "./src/routes/adminRouter.js";
//swaggerConfig

const app = express();
//configurations
dotenv.config();
//port
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocumentation));
app.use("/api/user", userRoutes);
app.use(adminJs.options.rootPath, adminRouter);
app.use("/api/pizza", pizzaRoutes);
app.use("/api/toppings", toppingRoutes);
app.use("/api/cart", cartRoutes);

//connect to database
mongoDb;
//server
app.listen(port, () =>
  console.log(`server is running on port http://localhost:${port}`),
);
