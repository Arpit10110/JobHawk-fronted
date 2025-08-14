import { NextResponse } from "next/server"; 
import { connectDB } from "@/db/dbconnect"; 
import { UserModel } from "@/model/usermode"; 
import { SendWelomeEmail } from "@/constants/email_constants";

export const POST = async(req:Request)=>{
    try {
        const {email,name,googleid,image} = await req.json();
        if(!email || !name || !googleid){
            return NextResponse.json({success:false,message:"Missing required fields"})
        }
        const ImageUrl = image || "https://res.cloudinary.com/dblybkghe/image/upload/v1742805997/defaultprofile_c9wwd3.png";
        await connectDB();
        const isuser = await UserModel.findOne({email:email});
        console.log(ImageUrl)
        if(!isuser){
          await UserModel.create({
            name:name,
            email:email,
            googleId:googleid,
            userimage:ImageUrl
          })
          SendWelomeEmail(email)
        }
        return NextResponse.json({success:true})
    } catch (error) {
        return NextResponse.json({success:false,message:error})
    }
}