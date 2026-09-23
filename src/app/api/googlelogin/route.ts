import { NextResponse } from "next/server"; 
import { connectDB } from "@/db/dbconnect"; 
import { UserModel } from "@/model/usermode"; 
import { SendWelomeEmail } from "@/constants/email_constants";

export const POST = async(req:Request)=>{
    try {
        const {email,name,googleid} = await req.json();
        if(!email || !name || !googleid){
            return NextResponse.json({success:false,message:"Missing required fields"})
        }
        await connectDB();
        const isuser = await UserModel.findOne({email:email});
        if(!isuser){
          await UserModel.create({
            name:name,
            email:email,
            googleId:googleid,
          })
          SendWelomeEmail(email)
        }
        return NextResponse.json({success:true})
    } catch (error) {
        return NextResponse.json({success:false,message:error})
    }
}