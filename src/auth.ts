import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredensitalProvider from "next-auth/providers/credentials"
import axios from "axios"
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
    signIn:async({user,account})=>{
      if(account?.provider=="google"){
        const res = await axios.post(`${process.env.Frontend_Url}api/googlelogin`,{
          email:user.email,
          name:user.name,
          googleid:user.id,
          image:user.image
        })
        console.log(res)
        if(res.data.success){
          return true
        }else{
          return false
        }
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