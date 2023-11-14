import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";


export const authOptions = {
    session:{strategy:"jwt"},
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
    
            async authorize(credentials) {
                try {
                    connectDB()

                } catch (error) {
                    throw new Error("مشکلی در سرور رخ داده است")
                }
                            
                const {email, password} = credentials
                if (!email || !password) {
                    throw new Error("لطفا اطلاعات معتبر وارد کنید")

                }
                const user = await User.findOne({email:email})
                if (!user) {
                    throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید")

                }
                const isValid = await verifyPassword(password, existinguser.password)
                if (!isValid) {
                    throw new Error("ایمیل یا رمز عبور اشتباه است")

                }
        
                return {email}
        
        
            }
          })

    ],
}  
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }