import Profile from "@/models/Profile"
import User from "@/models/User"
import connectDB from "@/utils/connectDB"
import { Types } from "mongoose"
import { getServerSession } from "next-auth"

export const POST=async(request)=>{
    try {
        await connectDB()
        const body = await request.json()
        const{ 
            title,
        description,
        location,
        phone,
        price,
        realestate,
        constructionDate,
        category,
        rules,
        amenities}=body

        if (!title||
            !description||
           !location||
            !phone||
            !price||
            !realestate||
            !constructionDate||
            !category) {
            return NextResponse.json({error:"لطفا اطلاعات معتبر وارد کنید"},{status:400})

        }

        const session = getServerSession(request)
        if (!session) {
            return NextResponse.json({error:"لطفا وارد حساب کاربری خود بشوید"},{status:401})
            
        }
        const user = await User.findOne({email:session.user.email})
        if (!user) {
            return NextResponse.json({error:"حساب کاربری وجود ندارد"},{status:404})
            
        }
        const newProfile = await Profile.create({title,
            description,
            location,
            phone,
            price:+price,
            realestate,
            constructionDate,
            category,
            rules,
            amenities,userId:new Types.ObjectId(user._id)})
        console.log(newProfile)
        return NextResponse.json({message:"آگهی جدید اضافه شد"},{status:201})


    } catch (error) {
        console.log(error)
        return NextResponse.json({error:"مشکلی در سرور رخ داده است"},{status:500})
    }
}