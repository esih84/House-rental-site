import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";


export const POST=async(request)=>{
    try {
        connectDB()

        const {email, password} = await request.json()
        // console.log({email, password})
        if (!email || !password) {
            return NextResponse.json({error:"لطفا اطلاعات معتبر وارد کنید"},{status:422})

        }
        const existinguser = await User.findOne({email})
        if (existinguser) {
            return NextResponse.json({error:"این حساب کاربری وجود دارد"},{status:422})
        }
        const hashpassword = await hashPassword(password)

        const newUser = await User.create({email:email, password:hashpassword})
        // console.log(newUser)

        return NextResponse.json({message:"حساب کاربری ایجاد شد"},{status:201})


    } catch (error) {
        console.log(error)
        return NextResponse.json({error:"مشکلی در سرور رخ داده است"},{status:500})
    }
}