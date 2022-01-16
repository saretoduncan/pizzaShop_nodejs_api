import express from "express"
import userRoutes from './src/routes/authRoute.js'
import toppingRoutes from './src/routes/toppings.js'
import cartRoutes from './src/routes/cart.js'
import pizzaRoutes from './src/routes/pizza.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {adminRouter} from './src/routes/adminRouter.js'



const app = express();
//configurations
dotenv.config();
//port
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/admin', adminRouter);
app.use('/api/pizza',pizzaRoutes )
app.use('/api/toppings',toppingRoutes);
app.use('/api/cart', cartRoutes);

//connect to database
mongoose.connect (process.env.DB_CONNECTION,()=>{
    console.log(`db connected successfully`);
})

//server
app.listen(port, ()=> console.log(`server is running on port http://localhost:${port}`));