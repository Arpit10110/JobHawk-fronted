import { NextResponse } from "next/server";
import { UserModel } from "@/model/usermode";
import { connectDB } from "@/db/dbconnect";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";

export const POST =async(req:Request)=>{
    try {
        const {email,password} = await req.json();
        if(!email || !password){
            return NextResponse.json({success:false,message:"Missing required fields"})
        }
        await connectDB();

        const user = await UserModel.findOne({email});
        if(!user){
            return NextResponse.json({success:false,message:"User not found"})
        }
        const ispassword = await bcrypt.compare(password,user.password);
        if(!ispassword){
            return NextResponse.json({success:false,message:"Invalid password"})
        }
        await signIn("credentials",{
            email:email,
            name:user.name,
            id:user._id
        })
        return NextResponse.json({success:true,message:"Login successful"})
    } catch (error:any) {
        if (error.digest && error.digest.includes('NEXT_REDIRECT')) {
            return NextResponse.json({success: true, message: "Login successful"})
        }
        return NextResponse.json({success:false,message:"Error in Login",error:error})

    }
}