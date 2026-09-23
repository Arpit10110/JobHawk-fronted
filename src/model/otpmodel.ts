import mongoose from "mongoose"; 

const otpSchema = new mongoose.Schema({
    email:{
        required:true,
        type:String
    },
    otp:{
        required:true,
        type:String
    },
})

export const  OtpModel = mongoose.models.OtpModel || mongoose.model("OtpModel", otpSchema);