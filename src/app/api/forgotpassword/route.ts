import { NextResponse } from "next/server"; 
import { UserModel } from "@/model/usermode"; 
import { connectDB } from "@/db/dbconnect"; 

export const POST = async(req:Request)=>{
    try {
        const {email} = await req.json();
        if(!email){
            return NextResponse.json({
                success:false,
                message:"Email is required."
            })
        }
        await connectDB();
        const user = await UserModel.findOne({email:email});
        if(!user){
            return NextResponse.json({
                success:false,
                message:"Invalid email."
            })
        }
        return NextResponse.json({
            success:true,
            message:"Email Verified",
        })
    } catch (error) {
        return NextResponse.json({
            success:false,
            error:error
        })
    }
}