import { NextResponse } from "next/server";
import crypto from "crypto";
import { Cashfree, CFEnvironment } from "cashfree-pg";
import { getuser } from '@/lib/getuser';

const cashfree = new Cashfree(
	CFEnvironment.PRODUCTION,
	// CFEnvironment.SANDBOX,
  process.env.Cashfree_App_ID, 
  process.env.Cashfree_Secret
);


function generateOrderId() {
  const uniqueId = crypto.randomBytes(16).toString('hex');
  const hash = crypto.createHash('sha256');
  hash.update(uniqueId);
  const orderId = hash.digest('hex');
  return orderId.substr(0, 12);
}

export const POST = async (req) => {
  try {

    const {plan} = await req.json();

    const user = await getuser();


    if (user==null) {
      return NextResponse.json({
        success: false,
        message: "Please LogIn First",
      });
    }

    const user_data = user.user;
    
    const request = {
      "order_amount": plan.total_Price,
      "order_currency": "INR",
      "order_id": generateOrderId(), // Remove await here
      "customer_details": {
        "customer_id": "TestCustomer",
        "customer_phone": "9876543210",
        "customer_name": user_data.name,
        "customer_email": user_data.email
      },
    };

    
    const response = await cashfree.PGCreateOrder(request);
    return NextResponse.json({
      success: true, 
      data: response.data
    });

  } catch (error) {
    console.error('Error:', error);
    
    return NextResponse.json({ 
      success: false, 
      message: error
    });
  }
};
