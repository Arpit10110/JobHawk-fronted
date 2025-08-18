import { NextResponse } from "next/server"; 
import { PlanModel } from "@/model/planmodel";
import { UserModel } from "@/model/usermode";
import { getuser } from "@/lib/getuser";
import { connectDB } from "@/db/dbconnect";
import { SendPlanPurchaseEmail } from "@/constants/email_constants";
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
        if(!plan){
            return NextResponse.json({
                success:false,
                error:"Plan not found"
            })
        }
        await connectDB();
        const user_data = user.user;
        const user_fulldata = await UserModel.findOne( {email:user_data?.email} ) ;

        const plan_start_date = new Date();
        const end_date = new Date(plan_start_date);
        if(plan.name == "Premium"){
            // add 2 months in this plan
            end_date.setDate(end_date.getDate() + 60); 
        }else{
            end_date.setDate(end_date.getDate() + 30); 
        }

        const existing_plan = await PlanModel.findOne({plan_user_id:user_fulldata._id})
        if(existing_plan){
            // update plan name,starting date and end date and price
            await PlanModel.updateOne({plan_user_id:user_fulldata._id},{
                $set:{
                    plan_name:plan.name,
                    plan_status:"active",
                    plan_start_date:new Date(),
                    plan_end_date:end_date,
                    plan_price:plan.total_Price
                }
            })
        }else{
            await PlanModel.create({
                plan_name:plan.name,
                plan_status:"active",
                plan_start_date:new Date(),
                plan_end_date:end_date,
                plan_user_id:user_fulldata._id,
                plan_price:plan.total_Price
            })
        }

        if(user_data?.email){
            await SendPlanPurchaseEmail(user_fulldata.email,plan.name,plan.total_Price,plan_start_date.toString(),end_date.toString()) 
        }
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