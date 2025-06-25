import mongoose from "mongoose";


const Connection = mongoose.connect('mongodb://localhost:27017/testdatabase').then(()=>{
    console.log("Connected to the Database")
})

export default Connection