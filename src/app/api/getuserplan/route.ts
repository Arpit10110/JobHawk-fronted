import { NextResponse } from "next/server";
import { getuser } from "@/lib/getuser";
import { connectDB } from "@/db/dbconnect";
import { PlanModel } from "@/model/planmodel";
import { UserModel } from "@/model/usermode";
export const GET = async(req:Request)=>{
    try {

        const user = await getuser();
        if(user==null){
            return NextResponse.json({
                success:false,
                message:"Please Login First"
            })
        }
        const user_email = user.user?.email;
        await connectDB();

        const user_data = await UserModel.findOne({email:user_email});  

        const userplan = await PlanModel.findOne({plan_user_id:user_data._id});
        if(userplan){
            return NextResponse.json({
                success:true,
                data:userplan
            })
        }else{
            return NextResponse.json({
                success:true,
                message:"No Plan found",
                data:null
            })
        }
    } catch (error) {
        return NextResponse.json({
            success:false,
            error:error
        })
    }
}