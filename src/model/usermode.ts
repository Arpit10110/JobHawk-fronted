import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    googleId:{
        type:String,
    },
    userimage:{
        type:String,
        default:"https://res.cloudinary.com/dblybkghe/image/upload/v1742805997/defaultprofile_c9wwd3.png"
    }
})

export const UserModel = mongoose.models?.User || mongoose.model("User", userSchema)