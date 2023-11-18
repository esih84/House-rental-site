import Profile from "@/models/Profile"
import User from "@/models/User"
import connectDB from "@/utils/connectDB"
import { Types } from "mongoose"
import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"

export const GET=async(request)=>{
    try {
        await connectDB()
        const profile = await Profile.find({published:true}).select("-userId")


        // console.log(profile)

        return NextResponse.json({data:profile},{status:200})


    } catch (error) {
        // console.log(error)
        return NextResponse.json({error:"مشکلی در سرور رخ داده است"},{status:500})
    }
}

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
        // console.log(body)
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

        const session = await getServerSession(request)
        if (!session) {
            return NextResponse.json({error:"لطفا وارد حساب کاربری خود بشوید"},{status:401})
            
        }
        // console.log(session)
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
            amenities,userId: new Types.ObjectId(user._id)})
        // console.log(newProfile)
        return NextResponse.json({message:"آگهی جدید اضافه شد"},{status:201})


    } catch (error) {
        // console.log(error)
        return NextResponse.json({error:"مشکلی در سرور رخ داده است"},{status:500})
    }
}

export const PATCH = async(request)=>{
    try {
        await connectDB()
        const{ 
            _id,
            title,
        description,
        location,
        phone,
        price,
        realestate,
        constructionDate,
        category,
        rules,
        amenities}=await request.json()
        // console.log(_id)
        if (!_id||!title||
            !description||
           !location||
            !phone||
            !price||
            !realestate||
            !constructionDate||
            !category) {
            return NextResponse.json({error:"لطفا اطلاعات معتبر وارد کنید"},{status:400})

        }

        const session = await getServerSession(request)
        if (!session) {
            return NextResponse.json({error:"لطفا وارد حساب کاربری خود بشوید"},{status:401})
            
        }
        // console.log(session)
        const user = await User.findOne({email:session.user.email})
        // console.log(user)
        if (!user) {
            return NextResponse.json({error:"حساب کاربری وجود ندارد"},{status:404})
            
        }

        const profile = await Profile.findOne({_id})
        if (!profile.userId.equals(user._id)) {
            return NextResponse.json({error:"دسترسی شما به این آگهی محدود است"},{status:403})
            
        }

        profile.title=title,
        profile.description=description,
        profile.location=location,
        profile.phone=phone,
        profile.price=price,
        profile.realestate=realestate,
        profile.constructionDate=constructionDate,
        profile.category=category,
        profile.rules=rules,
        profile.amenities=amenities
        profile.save()
        return NextResponse.json({message:"آگهی با موفقیت ویراش شد"},{status:200})


    } catch (error) {
        // console.log(error)
        return NextResponse.json({error:"مشکلی در سرور رخ داده است"},{status:500})
    }
}