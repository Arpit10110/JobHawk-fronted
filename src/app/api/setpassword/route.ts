import { NextResponse } from "next/server"; 
import bcrypt from "bcryptjs";
import { connectDB } from "@/db/dbconnect";
import { UserModel } from "@/model/usermode";

export const POST = async(req:Request)=>{
    try {   
        const {email,new_password} = await req.json();
        console.log(email, new_password);
        if(!email || !new_password){
            return NextResponse.json({error: "All fields are required."});
        }
        await connectDB();
        const user = await UserModel.findOne({email:email});
        if(user){
            const hashedPassword = await bcrypt.hash(new_password, 10);
            await UserModel.updateOne({email:email},{password:hashedPassword});
            return NextResponse.json({success:true, message: "Password has been updated."});
        }else{
            return NextResponse.json({success:false,message: "Invalid Data."});
        }
    } catch (error) {
        return NextResponse.json({error: "An error occurred while processing your request."});
    }
}