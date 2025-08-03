import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredensitalProvider from "next-auth/providers/credentials"
// import { connectDB } from "./db/dbconnect";
// import { UserModel } from "./model/usermode";
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
      name:{
          label:"name",
          type:"name",
      },
      id:{
        label:"id",
        type:"id",
      }
      },
     authorize: async(credential)=>{
       const email = credential.email as string | undefined ;
       const name = credential.name as string | undefined;
       const userid = credential.id as string | undefined;
       if(!email || !userid || !name){
         throw new Error("Invalid credentials")
       }
       console.log(email,name,userid)
       return {name:name,email:email,id:userid}
     }
    })
  ],
  pages:{
    signIn:"/login",
  },
  callbacks:{
    signIn:async({account})=>{
      if(account?.provider=="google"){
        // const user_email = user.email;
        // await connectDB();
        // const isuser = await UserModel.findOne({email:user_email});
        // if(!isuser){
        //   await UserModel.create({
        //     name:user.name,
        //     email:user_email,
        //     googleId:user.id
        //   })
        // }
        return true
      }
      else if (account?.provider === "credentials") {
        // Handle credentials sign-in
        return true // Allow credentials sign-in
      }
      else{
        return false
      }
    }
  }
})