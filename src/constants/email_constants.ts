import { transporter } from "./email_transport";

const OtpHtml = (otp: string) => {
    const safeOtp = (otp || '').toString().slice(0, 6);
    return `
    <!doctype html> <html lang="en"> <head> <meta charSet="utf-8" /> <meta name="viewport" content="width=device-width,initial-scale=1" /> <title>JobHawk OTP</title> <style> body { margin:0; background:#f5f7fb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial, sans-serif; color:#1f2937; } .container { max-width: 560px; margin: 0 auto; padding: 24px 16px; } .card { background:#ffffff; border-radius: 12px; box-shadow: 0 6px 24px rgba(16,24,40,0.08); overflow:hidden; } .header { background: linear-gradient(135deg, #2858ff, #6aa0ff); color:#fff; padding: 20px 24px; } .brand { display:flex; align-items:center; gap:10px; font-weight:700; font-size:18px; letter-spacing:0.3px; } .logo { width:28px; height:28px; border-radius:6px; background:#fff; color:#2858ff; display:flex; align-items:center; justify-content:center; font-weight:800; } .content { padding: 24px; } h1 { margin:0 0 8px; font-size:20px; color:#111827; } p { margin:8px 0; line-height:1.55; color:#374151; } .otp-box { margin:20px 0; background:#f0f5ff; border:1px dashed #2b5bff; color:#1d3fff; font-weight:800; font-size:24px; letter-spacing:6px; text-align:center; padding:16px; border-radius:10px; } .cta { margin-top: 20px; } .button { display:inline-block; background:#2858ff; color:#fff !important; text-decoration:none; padding:12px 18px; border-radius:10px; font-weight:700; font-size:14px; } .muted { color:#6b7280; font-size:12px; } .footer { text-align:center; color:#9ca3af; font-size:12px; padding:16px 8px; } @media (max-width: 480px) { .content { padding: 20px; } .otp-box { font-size:22px; letter-spacing:5px; } } </style> </head> <body> <div class="container"> <div class="card"> <div class="header"> <div class="brand"><div>JobHawk</div> </div> </div> <div class="content"> <h1>Your verification code</h1> <p>Use the 6‑digit code below to verify your email and continue setting your password.</p> <div class="otp-box">${safeOtp}</div> <p class="muted"> Do not share it with anyone.</p> <div class="cta"></div> <p>If you didn’t request this, you can safely ignore this email.</p> </div> </div> <div class="footer"> © ${new Date().getFullYear()} JobHawk. All rights reserved. </div> </div> </body> </html> `; };


export const SendOtpEmail =async(user_email:string,otp:string)=>{
    const info = await transporter.sendMail({
        from: 'omagrahari55@gmail.com',
        to: user_email, // Replace with recipient email
        subject: `Your JobHawk verification code'`,
        html: OtpHtml(otp), // Use the generated HTML content
      });
}