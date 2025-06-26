import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongouri = process.env.DataBaseConfig

const Connection = mongoose.connect(mongouri).then(() => {
  console.log("Connected to the Database");
});

export default Connection;
