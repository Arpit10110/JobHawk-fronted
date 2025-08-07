import { NextResponse } from "next/server"; 
import { PlanModel } from "@/model/planmodel";
import { UserModel } from "@/model/usermode";
import { getuser } from "@/lib/getuser";
import { connectDB } from "@/db/dbconnect";
export const POST = async(req:Request)=>{
    try {
        const {plan} = await req.json()
        const user = await getuser()
        if(user == null){
            return NextResponse.json({
                success:false,
                error:"Please login first"
            })
        }
        await connectDB();
        const user_data = user.user;
        const user_fulldata = await UserModel.findOne( {email:user_data?.email} ) ;

        let plan_start_date = new Date();
        let end_date = new Date(plan_start_date);
        if(plan.name == "Premium"){
            // add 2 months in this plan
            end_date.setDate(end_date.getDate() + 60); 
        }else{
            end_date.setDate(end_date.getDate() + 30); 
        }

        await PlanModel.create({
            plan_name:plan.name,
            plan_status:"active",
            plan_start_date:new Date(),
            plan_end_date:end_date,
            plan_user_id:user_fulldata._id,
            plan_price:plan.total_Price
        })

        return NextResponse.json({
            success:true,
            message:"Plan Purchased Successfully",
        })

    } catch (error) {
        return NextResponse.json({
            success:false,
            error:error
        })
    }
}