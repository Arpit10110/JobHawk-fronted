import NextAuth, { CredentialsSignin } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredensitalProvider from "next-auth/providers/credentials"
import { connectDB } from "./db/dbconnect";
import { UserModel } from "./model/usermode";
import bcrypt from "bcryptjs";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.Google_ClientID_id,
      clientSecret: process.env.Google_ClientID_secret,
    }),
    CredensitalProvider({
      name: "Credential",
      credentials: {
        email:{
          label:"Email",
          type:"email"
      },
      password:{
          label:"Password",
          type:"password",
      }
      },
      authorize:async(credential)=>{
        const email = credential.email as string | undefined ;
        const password = credential.password as string | undefined;
        if(!email || !password){
          throw new Error("Invalid credentials")
        }else{
          await connectDB();
          const user = await UserModel.findOne({email});
            if(!user){
                throw new Error("User not found")
            }
            if(!user.password){
                throw new CredentialsSignin("Please Login using google or ther providers");
            }
            const ispassword = await bcrypt.compare(password,user.password);
            if(!ispassword){
                throw new Error("Invalid credentials")
            }else{
              return {email:email,name:user.name,userid:user._id}
            }
          }
        }
    })
  ],
  pages:{
    signIn:"/login",
  },
  callbacks:{
    signIn:async({user,account})=>{
      if(account?.provider=="google"){
        const user_email = user.email;
        await connectDB();
        const isuser = await UserModel.findOne({email:user_email});
        if(!isuser){
          await UserModel.create({
            name:user.name,
            email:user_email,
            googleId:user.id
          })
        }
        return true
      }else{
        return false
      }
    }
  }
})