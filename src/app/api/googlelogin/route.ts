import { NextResponse } from "next/server"; 
import { connectDB } from "@/db/dbconnect"; 
import { UserModel } from "@/model/usermode"; 

export const POST = async(req:Request)=>{
    try {
        const {email,name,googleid} = await req.json();
        await connectDB();
        const isuser = await UserModel.findOne({email:email});
        if(!isuser){
          await UserModel.create({
            name:name,
            email:email,
            googleId:googleid
          })
        }
        return NextResponse.json({success:true})
    } catch (error) {
        return NextResponse.json({success:false,message:error})
    }
}