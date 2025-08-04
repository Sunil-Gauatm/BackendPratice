import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongourl = process.env.mongoDBURL;

const DatabaseConnnection = mongoose.connect(mongourl).then(() => {
  console.log("✅ Database connected successfully");
});

export default DatabaseConnnection;
