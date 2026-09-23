"use server"
import { auth } from "@/auth"

export const getuser = async()=>{
    const user = await auth()
    if(user){
        return user
    }else{
        return null
    }
}