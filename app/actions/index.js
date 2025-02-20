
'use server'
import { singIn } from "@/auth" 
export async function credentialLogin(formData){
    try{
        const response = await singIn("credentials",{
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        })
        return response;
    }catch(error){
        throw new Error(error);
    }
}