import { authOptions } from "@/api/auth/[...nextauth]/route";
import MyProfilePage from "@/components/template/MyProfilePage";
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth/next";

const MyProfile =async () => {
    const session = await getServerSession(authOptions)
    // console.log(session.user.email)

    await connectDB()
    
    const [user] = await User.aggregate([
        {$match :{email:session.user.email} },
        {$lookup :{ 
            from: 'profiles',
            foreignField: 'userId', //foreign is profile
            localField: '_id', //local is user 
            as: 'profiles',
         }}
        ])

        // console.log(user)

        // another way to get data 
    // const profile = await Profile.find({userId:user[0]._id})
    return (
        <MyProfilePage profiles={user.profiles}/>
    );
}

export default MyProfile;