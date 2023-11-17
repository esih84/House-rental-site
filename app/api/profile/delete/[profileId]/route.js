import Profile from "@/models/Profile"
import User from "@/models/User"
import connectDB from "@/utils/connectDB"
import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"

export const DELETE=async(request,{params:{profileId}})=>{
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
        const profile = await Profile.findOne({_id:profileId})

        if (!profile.userId.equals(user._id)) {
            return NextResponse.json({error:"دسترسی شما به این آگهی محدود است"},{status:403})
            
        }
        await profile.deleteOne({_id:profileId})
        return NextResponse.json({message:"آگهی مورد نظر حذف شد"},{status:200})

    } catch (error) {

        return NextResponse.json({error:"مشکلی در سرور رخ داده است"},{status:500})
    }
}