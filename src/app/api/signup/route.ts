import { NextResponse } from "next/server"; 
import { auth, signIn } from "@/auth"
import { UserModel } from "@/model/usermode"
import { connectDB } from "@/db/dbconnect";
import bcrypt from "bcryptjs";
export const POST = async(req:Request)=>{
    try {
        const { name, email, password } = await req.json()
        if(!name || !email || !password){
            return NextResponse.json({success:false,message:"Missing required fields"})
        }
        await connectDB()
        const isuser = await UserModel.findOne({email});
        if(isuser){
            return NextResponse.json({success:false,message:"User already exists. Please login"})
        }
        const hashpassword = await bcrypt.hash(password,10)
        const user = await UserModel.create({name,email,password:hashpassword})
        return NextResponse.json({success:true,message:"User created successfully"})
    } catch (error) {
        return NextResponse.json({success:false,message:"Error in creating user",error:error})
    }
}