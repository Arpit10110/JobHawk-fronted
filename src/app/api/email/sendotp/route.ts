import { NextResponse } from 'next/server';
import { connectDB } from '@/db/dbconnect';
import { OtpModel } from '@/model/otpmodel';
import bcrypt from 'bcryptjs';
import { SendOtpEmail } from '@/constants/email_constants';
export const POST = async(req:Request)=>{
    try {
        const {email} = await req.json();
        console.log(email);
        if(!email){
            return NextResponse.json({error: "Email is required"}, {status: 400});
        }
        await connectDB();
        const already_exists = await OtpModel.findOne({email:email});
        if(already_exists){
            await OtpModel.deleteOne({email:email});
        }
        const otp = Math.floor(Math.random() * 1000000);
        const otpString = otp.toString().padStart(6, '0'); // Ensure OTP is 6 digits
        const hashedOtp = await bcrypt.hash(otpString, 10);
        await OtpModel.create({email:email,otp:hashedOtp});
        await SendOtpEmail(email,otpString);
        return NextResponse.json({success:true, message: "OTP has been sent to your email."}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: "An error occurred while processing your request."}, {status: 500});
    }
}