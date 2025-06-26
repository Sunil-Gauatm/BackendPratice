import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config();



const mongodburi = process.env.DBCONFIG


const connection = await mongoose.connect(mongodburi).then(()=>{
    console.log('Database Connectedddd')
})
export default connection