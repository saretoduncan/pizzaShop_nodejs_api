import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoDb = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/pizzastore",
  () => {
    console.log(`db connected successfully`);
  },
);
export default mongoDb;
