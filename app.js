import express from "express"
import userRoutes from './src/routes/userRoutes.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express();
//configurations
dotenv.config();
//port
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use('/api/user', userRoutes);

//connect to database
mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log(`db connected successfully`);
})

//server
app.listen(port, ()=> console.log(`server is running on port http://localhost:${port}`));