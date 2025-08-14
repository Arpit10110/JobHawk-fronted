import { NextResponse } from "next/server"; 
import { UserModel } from "@/model/usermode"
import { connectDB } from "@/db/dbconnect";
import bcrypt from "bcryptjs";
import { SendWelomeEmail } from "@/constants/email_constants";
export const POST = async(req:Request)=>{
    try {
        const { name, email, password } = await req.json()
        if(!name || !email || !password){
            return NextResponse.json({success:false,message:"Missing required fields"})
        }
        await connectDB()
        const ImageUrl = "https://res.cloudinary.com/dblybkghe/image/upload/v1742805997/defaultprofile_c9wwd3.png";
        const isuser = await UserModel.findOne({email});
        if(isuser){
            return NextResponse.json({success:false,message:"User already exists. Please login"})
        }
        const hashpassword = await bcrypt.hash(password,10)
        await UserModel.create({name,email,password:hashpassword, userimage:ImageUrl})
        const email_res = await SendWelomeEmail(email)
        return NextResponse.json({success:true,message:"User created successfully",email_response:email_res.success})
    } catch (error) {
        return NextResponse.json({success:false,message:"Error in creating user",error:error})
    }
}