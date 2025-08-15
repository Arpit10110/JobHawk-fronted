import { NextResponse } from 'next/server';
import { getuser } from '@/lib/getuser';
import { connectDB } from '@/db/dbconnect';
import { UserModel } from '@/model/usermode';
import SavedAlert from '@/model/SavedAlert_model';
export const GET = async()=>{
    try {
        const user = await getuser();
        if(user==null){
            return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
        }
        await connectDB();
        const User_data = await UserModel.findOne({email:user.user?.email});
        if(!User_data){
            return NextResponse.json({success:false,message:"User not found"})
        }
        const savedalert = await SavedAlert.find({})
    } catch (error) {
        return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
    }
};