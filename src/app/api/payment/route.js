import { NextResponse } from "next/server";
import crypto from "crypto";
import { Cashfree } from "cashfree-pg";

const cashfree = new Cashfree(
  Cashfree.PRODUCTION, 
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

export const GET = async () => {
  try {
    const request = {
      "order_amount": 1.00,
      "order_currency": "INR",
      "order_id": generateOrderId(), // Remove await here
      "customer_details": {
        "customer_id": "arpitkumar",
        "customer_phone": "9599056856",
        "customer_name": "Arpit Kumar",
        "customer_email": "omagrahari55@gmail.com"
      },
    };
    console.log("App id is "+process.env.Cashfree_App_ID)
    console.log("Secret is "+process.env.Cashfree_Secret)
    // Properly await the promise
    const response = await cashfree.PGCreateOrder(request);
    return NextResponse.json({
      success: true, 
      data: response.data
    });

  } catch (error) {
    console.error('Error:', error.response?.data?.message || error.message);
    
    return NextResponse.json({ 
      success: false, 
      message: error.response?.data?.message || "Payment failed"
    });
  }
};
