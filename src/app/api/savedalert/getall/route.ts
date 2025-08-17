import { NextResponse } from 'next/server';
import { getuser } from '@/lib/getuser';
import { connectDB } from '@/db/dbconnect';
import { UserModel } from '@/model/usermode';
import SavedAlert from '@/model/SavedAlert_model';
import { PlanModel } from '@/model/planmodel';
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
        const savedalert = await SavedAlert.find({user_id:User_data._id})
        const plan =await PlanModel.findOne({plan_user_id:User_data._id});
        return NextResponse.json({ success: true, savedalert: savedalert,plan: plan }, { status: 200 });
    } catch (error) {
        console.error("Error fetching saved alerts:", error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
};