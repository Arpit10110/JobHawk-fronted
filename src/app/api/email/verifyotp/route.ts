import { NextResponse } from 'next/server';
import { connectDB } from '@/db/dbconnect';
import { OtpModel } from '@/model/otpmodel';
import bcrypt from 'bcryptjs';

export const POST = async(req:Request)=>{
    try {
        const {email,otp} = await req.json();
        if(!email || !otp){
            return NextResponse.json({error: "All fields are required."});
        }
        await connectDB();
        const otp_data = await OtpModel.findOne({email:email});
        if(otp_data){

            const otp_verified = await bcrypt.compare(otp,otp_data.otp);
            if(!otp_verified){
                return NextResponse.json({error: "Invalid OTP."});
            }
            await OtpModel.deleteOne({email:email});

            return NextResponse.json({success:true, message: "OTP has been verified."});

        }else{
            return NextResponse.json({error: "Invalid Data."});
        }
 
    } catch (error) {
        return NextResponse.json({error: "An error occurred while processing your request."}, {status: 500});
    }
}