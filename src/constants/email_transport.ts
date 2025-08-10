import nodemailer from "nodemailer";


export  const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "omagrahari55@gmail.com",
        pass: process.env.Email_password, // Your App Password
      },
});