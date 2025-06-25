import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String 
    },
    password: {
        type : String
    },
},
{
    timestamp : true
}
)

export const userModel = mongoose.model("User" , userSchema)