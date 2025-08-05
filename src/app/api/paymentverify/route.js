import { NextResponse } from "next/server";
import { Cashfree, CFEnvironment } from "cashfree-pg";


const cashfree = new Cashfree(
    CFEnvironment.SANDBOX,
    process.env.Cashfree_App_ID, 
    process.env.Cashfree_Secret
  );
  
export const POST = async(req)=>{
    try {
        const {orderId} = await req.json();
        console.log(orderId);
        const response = await cashfree.PGOrderFetchPayments(orderId);
        console.log(response);
        return NextResponse.json({success:true,data:response.data})
    } catch (error) {
        return NextResponse.json({success:false,message:error})
    }
}