import express from "express";
import userRoutes from "./src/routes/authRoute.js";
import toppingRoutes from "./src/routes/toppings.js";
import cartRoutes from "./src/routes/cart.js";
import pizzaRoutes from "./src/routes/pizza.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { adminRouter } from "./src/routes/adminRouter.js";
//swaggerConfig
const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "pizza store api",
      version: "3.0.3",
      description:
        "An api that stores and retrieves the store info including buyers and purchases",

      contact: {
        name: "Dantez pizza store",

        email: "duncan.moiyo@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
    ],
  },
  apis: ["./src/routes/*js"],
};
const app = express();
//configurations
dotenv.config();
//port
const port = process.env.PORT || 5000;
const specs = swaggerJSDoc(options);
//middleware
app.use(express.json());
app.use(cors())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api/user", userRoutes);
app.use("/admin", adminRouter);
app.use("/api/pizza", pizzaRoutes);
app.use("/api/toppings", toppingRoutes);
app.use("/api/cart", cartRoutes);

//connect to database
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log(`db connected successfully`);
});

//server
app.listen(port, () =>
  console.log(`server is running on port http://localhost:${port}`),
);
