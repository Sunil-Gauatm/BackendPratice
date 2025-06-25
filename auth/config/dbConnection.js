import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongourl = process.env.DataBaseConfig

const Connection = mongoose.connect(mongourl).then(() => {
  console.log("Connected to the Database");
});

export default Connection;
