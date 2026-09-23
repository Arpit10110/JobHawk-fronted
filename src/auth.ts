import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredensitalProvider from "next-auth/providers/credentials"
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
        try {
          const res = await fetch(`${process.env.Frontend_Url}api/googlelogin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: user.email,
              name: user.name,
              googleid: user.id,
              image: user.image
            })
          });
          const data = await res.json();
          return !!data?.success;
        } catch (error) {
          console.error("Error in googlelogin callback:", error);
          return false;
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