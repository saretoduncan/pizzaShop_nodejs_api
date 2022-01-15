import express from "express"
import userRoutes from './src/routes/authRoute.js'
import administrationRoutes from './src/routes/administrationroutes.js'
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
app.use('/api/adminupdate',administrationRoutes )

//connect to database
mongoose.connect (process.env.DB_CONNECTION,()=>{
    console.log(`db connected successfully`);
})

//server
app.listen(port, ()=> console.log(`server is running on port http://localhost:${port}`));