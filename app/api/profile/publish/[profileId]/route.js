import Profile from "@/models/Profile"
import User from "@/models/User"
import connectDB from "@/utils/connectDB"
import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"

export const PATCH = async(request,{params:{profileId}})=>{
    try {
        await connectDB()
        const session = await getServerSession(request)
        if (!session) {
            return NextResponse.json({error:"لطفا وارد حساب کاربری خود بشوید"},{status:401})
            
        }
        // console.log(session)
        const user = await User.findOne({email:session.user.email})
        if (!user) {
            return NextResponse.json({error:"حساب کاربری وجود ندارد"},{status:404})
            
        }
        if (user.role !== "ADMIN") {
            return NextResponse.json({error:"دسترسی محدود"},{status:403})
            
        }

        const profile = await Profile.findOne({_id:profileId})
        
        profile.published = true,
        profile.save()
        return NextResponse.json({message:"آگهی منتشرشد"},{status:200})
    } catch (error) {
        return NextResponse.json({error:"مشکلی در سرور رخ داده است"},{status:500})
    }
}

export const DELETE = async(request,{params:{profileId}})=>{
    try {
        await connectDB()
        const session = await getServerSession(request)
        if (!session) {
            return NextResponse.json({error:"لطفا وارد حساب کاربری خود بشوید"},{status:401})
            
        }
        // console.log(session)
        const user = await User.findOne({email:session.user.email})
        if (!user) {
            return NextResponse.json({error:"حساب کاربری وجود ندارد"},{status:404})
            
        }
        if (user.role !== "ADMIN") {
            return NextResponse.json({error:"دسترسی محدود"},{status:403})
            
        }

        const profile = await Profile.deleteOne({_id:profileId})
        

        return NextResponse.json({message:"آگهی حذف شد"},{status:200})
    } catch (error) {
        return NextResponse.json({error:"مشکلی در سرور رخ داده است"},{status:500})
    }
}