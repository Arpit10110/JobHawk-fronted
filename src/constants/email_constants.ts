import { transporter } from "./email_transport";

const OtpHtml = (otp: string) => {
    const safeOtp = (otp || '').toString().slice(0, 6);
    return `
    <!doctype html> <html lang="en"> <head> <meta charSet="utf-8" /> <meta name="viewport" content="width=device-width,initial-scale=1" /> <title>JobHawk OTP</title> <style> body { margin:0; background:#f5f7fb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial, sans-serif; color:#1f2937; } .container { max-width: 560px; margin: 0 auto; padding: 24px 16px; } .card { background:#ffffff; border-radius: 12px; box-shadow: 0 6px 24px rgba(16,24,40,0.08); overflow:hidden; } .header { background: linear-gradient(135deg, #2858ff, #6aa0ff); color:#fff; padding: 20px 24px; } .brand { display:flex; align-items:center; gap:10px; font-weight:700; font-size:18px; letter-spacing:0.3px; } .logo { width:28px; height:28px; border-radius:6px; background:#fff; color:#2858ff; display:flex; align-items:center; justify-content:center; font-weight:800; } .content { padding: 24px; } h1 { margin:0 0 8px; font-size:20px; color:#111827; } p { margin:8px 0; line-height:1.55; color:#374151; } .otp-box { margin:20px 0; background:#f0f5ff; border:1px dashed #2b5bff; color:#1d3fff; font-weight:800; font-size:24px; letter-spacing:6px; text-align:center; padding:16px; border-radius:10px; } .cta { margin-top: 20px; } .button { display:inline-block; background:#2858ff; color:#fff !important; text-decoration:none; padding:12px 18px; border-radius:10px; font-weight:700; font-size:14px; } .muted { color:#6b7280; font-size:12px; } .footer { text-align:center; color:#9ca3af; font-size:12px; padding:16px 8px; } @media (max-width: 480px) { .content { padding: 20px; } .otp-box { font-size:22px; letter-spacing:5px; } } </style> </head> <body> <div class="container"> <div class="card"> <div class="header"> <div class="brand"><div>JobHawk</div> </div> </div> <div class="content"> <h1>Your verification code</h1> <p>Use the 6‑digit code below to verify your email and continue setting your password.</p> <div class="otp-box">${safeOtp}</div> <p class="muted"> Do not share it with anyone.</p> <div class="cta"></div> <p>If you didn’t request this, you can safely ignore this email.</p> </div> </div> <div class="footer"> © ${new Date().getFullYear()} JobHawk. All rights reserved. </div> </div> </body> </html> `; };

const welcomeHtml = () => {
        return `
        
        <!doctype html> <html lang="en"> <head> <meta charSet="utf-8" /> <meta name="viewport" content="width=device-width,initial-scale=1" /> <title>Welcome to JobHawk</title> <style> body { margin:0; background:#f5f7fb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial, sans-serif; color:#1f2937; } .container { max-width: 560px; margin: 0 auto; padding: 24px 16px; } .card { background:#ffffff; border-radius: 12px; box-shadow: 0 6px 24px rgba(16,24,40,0.08); overflow:hidden; } .header { background: linear-gradient(135deg, #2858ff, #6aa0ff); color:#fff; padding: 20px 24px; } .brand { display:flex; align-items:center; gap:10px; font-weight:700; font-size:18px; letter-spacing:0.3px; } .content { padding: 24px; } h1 { margin:0 0 8px; font-size:22px; color:#111827; } p { margin:8px 0; line-height:1.55; color:#374151; } .cta { margin-top: 20px; display:flex; gap:12px; flex-wrap:wrap; } .button { display:inline-block; text-decoration:none; padding:12px 18px; border-radius:10px; font-weight:700; font-size:14px; } .primary { background:#2858ff; color:#fff !important; } .secondary { background:#eef2ff; color:#1f3fff !important; border:1px solid #c7d2fe; } .muted { color:#6b7280; font-size:12px; } .footer { text-align:center; color:#9ca3af; font-size:12px; padding:16px 8px; } @media (max-width: 480px) { .content { padding: 20px; } } </style> </head> <body> <div class="container"> <div class="card"> <div class="header"> <div class="brand">JobHawk</div> </div> <div class="content"> <h1>Welcome to JobHawk!</h1> <p>We’re thrilled to have you on board. Start exploring roles, set up alerts, and stay ahead in your job search.</p>
        
                <div style="gap:1rem" class="cta">
                  <a class="button primary" href="https://jobhawk.vercel.app/create-alert" target="_blank" rel="noopener noreferrer">
                    Create Job Alert
                  </a>
                  <a style="margin-left:12px;" class="button secondary" href="https://jobhawk.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Explore More
                  </a>
                </div>
        
                <p class="muted">If you didn’t create this account, you can ignore this email.</p>
              </div>
            </div>
            <div class="footer">
              © ${new Date().getFullYear()} JobHawk. All rights reserved.
            </div>
          </div>
        </body>
        </html> `; };
        

 const PlanPurchaseHtml = (plan_name: string, plan_price: number, plan_start_date: string, plan_end_date: string) => {
          // Format dates safely for display
          const start = new Date(plan_start_date);
          const end = new Date(plan_end_date);
          const fmt = (d: Date) =>
          isNaN(d.getTime()) ? plan_start_date : d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
          
          const startStr = fmt(start);
          const endStr = isNaN(end.getTime()) ? plan_end_date : end.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
          
          const priceStr = `₹ ${plan_price.toString()} `
          
          return `
          
          <!doctype html> <html lang="en"> <head> <meta charSet="utf-8" /> <meta name="viewport" content="width=device-width,initial-scale=1" /> <title>JobHawk Plan Confirmation</title> <style> body { margin:0; background:#f5f7fb; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Helvetica Neue',Arial,sans-serif; color:#1f2937; } .container { max-width:560px; margin:0 auto; padding:24px 16px; } .card { background:#fff; border-radius:12px; box-shadow:0 6px 24px rgba(16,24,40,0.08); overflow:hidden; } .header { background:linear-gradient(135deg,#2858ff,#6aa0ff); color:#fff; padding:20px 24px; } .brand { font-weight:700; font-size:18px; letter-spacing:0.3px; } .content { padding:24px; } h1 { margin:0 0 8px; font-size:20px; color:#111827; } p { margin:8px 0; line-height:1.55; color:#374151; } .summary { margin:16px 0; background:#f8fafc; border:1px solid #e5e7eb; border-radius:10px; padding:16px; } .row { display:flex; justify-content:space-between; gap:12px; margin:8px 0; } .label { color:#6b7280; font-size:13px; } .value { color:#111827; font-weight:600; } .cta { margin-top:20px; display:flex; flex-wrap:wrap; } .button { display:inline-block; text-decoration:none; padding:12px 18px; border-radius:10px; font-weight:700; font-size:14px; } .primary { background:#2858ff; color:#fff !important; } .secondary { background:#eef2ff; color:#1f3fff !important; border:1px solid #c7d2fe; } .spacer { display:inline-block; width:12px; height:12px; line-height:12px; } .muted { color:#6b7280; font-size:12px; } .footer { text-align:center; color:#9ca3af; font-size:12px; padding:16px 8px; } @media (max-width:480px) { .content { padding:20px; } .row { display:block; } } </style> </head> <body> <div class="container"> <div class="card"> <div class="header"> <div class="brand">JobHawk</div> </div> <div class="content"> <h1>Your plan is active 🎉</h1> <p>Thank you for choosing JobHawk. Your subscription has been activated successfully.</p>
          text
                  <div class="summary">
                    <div class="row">
                      <div class="label">Plan</div>
                      <div class="value">${plan_name || '-'}</div>
                    </div>
                    <div class="row">
                      <div class="label">Price</div>
                      <div class="value">${priceStr}</div>
                    </div>
                    <div class="row">
                      <div class="label">Start date</div>
                      <div class="value">${startStr}</div>
                    </div>
                    <div class="row">
                      <div class="label">End date</div>
                      <div class="value">${endStr}</div>
                    </div>
                    <div class="row">
                      <div class="label">Status</div>
                      <div class="value">Active</div>
                    </div>
                  </div>
          
                  <div class="cta" style="font-size:0;">
                    <a class="button primary" href="https://jobhawk.vercel.app/create-alert" target="_blank" rel="noopener noreferrer" style="display:inline-block; font-size:14px;">
                     Create Job Alert
                    </a>
                    <span class="spacer">&zwnj;</span>
                    <a class="button secondary" href="https://jobhawk.vercel.app/pricing" target="_blank" rel="noopener noreferrer" style="display:inline-block; font-size:14px;">
                      View Benefits
                    </a>
                  </div>
          
                  <p class="muted">If you didn’t make this purchase, please contact support immediately.</p>
                </div>
              </div>
              <div class="footer">
                © ${new Date().getFullYear()} JobHawk. All rights reserved.
              </div>
            </div>
          </body>
          </html> `; };

export const SendOtpEmail =async(user_email:string,otp:string)=>{
    try {
        const info = await transporter.sendMail({
            from: 'omagrahari55@gmail.com',
            to: user_email, // Replace with recipient email
            subject: `Your JobHawk verification code'`,
            html: OtpHtml(otp), // Use the generated HTML content
          });
          return {
            success:true,
            data:info
          };
    } catch (error) {      
      return {
        success:false,
        error:error
      }
    }
}


export const SendWelomeEmail = async(user_email:string)=>{
    try {
        const info = await transporter.sendMail({
            from:"omagrahari55@gmail.com",
            to: user_email,
            subject:"Welcome to JobHawk",
            html:welcomeHtml()
        })
        return {
            success:true,
            data:info
          };
    } catch (error) {
        return {
            success:false,
            error:error
          }
    }
  
}

export const SendPlanPurchaseEmail = async(user_email:string,plan_name:string,plan_price:number,plan_start_date:string,plan_end_date:string)=>{
    try {
        const info = await transporter.sendMail({
            from:"omagrahari55@gmail.com",
            to: user_email,
            subject:"Welcome to JobHawk",
            html:PlanPurchaseHtml(plan_name,plan_price,plan_start_date,plan_end_date)
        })
        return {
            success:true,
            data:info
          };
    } catch (error) {
        return {
            success:false,
            error:error
          }
    }
  
}