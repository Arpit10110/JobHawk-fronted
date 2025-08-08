import { NextResponse } from "next/server";
import { getuser } from "@/lib/getuser";
import { connectDB } from "@/db/dbconnect";
import { UserModel } from "@/model/usermode";
import { PlanModel } from "@/model/planmodel";

export const GET = async()=>{
    try {
            const user = await getuser();
            if(user==null){
                return NextResponse.json({
                    success:false,
                    message:"Please Login First"
                })
            }
            await connectDB();
            const user_email = user.user?.email;
            const user_data = await UserModel.findOne({email:user_email});
            const user_plan = await PlanModel.findOne({plan_user_id:user_data._id});
            let ispassword = false;
            let currentplan = "No Active Plan";
            if(user_data.password ){
                ispassword = true;
            }

            if(user_plan){
                currentplan = user_plan.plan_name;
            }


            return NextResponse.json({
                success:true,
                data:{
                    _id:user_data._id,
                    name:user_data.name,
                    email:user_data.email,
                    ispassword:ispassword,
                    currentplan:currentplan
                }
            })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:error
        })
    }
}