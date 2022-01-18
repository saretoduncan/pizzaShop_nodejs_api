import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoDb = mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log(`db connected successfully`);
});
export default mongoDb;