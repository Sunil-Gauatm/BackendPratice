import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    phonenumber: {
        type: Number
    },
    password: {
        type: String
    }
},
    {
        timestamps: true
    })


export  const userModel = mongoose.model('user', userSchema)