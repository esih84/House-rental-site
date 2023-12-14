import { authOptions } from "@/api/auth/[...nextauth]/route";
import PublishButton from "@/components/modules/PublishButton";
import DetailsPage from "@/components/template/DetailsPage";
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

export const generateMetadata=async({params:{profileId}})=>{
    await connectDB()
    
    const profile = await Profile.findOne({_id:profileId})
    return{
        title :profile.title,
        description:profile.description,
        authors:{ name:profile.realestate}
    }
}



const ProfileDetails =async ({params:{profileId}}) => {
    await connectDB()

    // console.log(profile)
    const session = await getServerSession(authOptions)
    await connectDB()
    const user = await User.findOne({email:session?.user.email})
    const profile = await Profile.findOne({_id:profileId})
    return (
        <>
        
            <DetailsPage data={profile} />
            {user?.role==="ADMIN"&& profile.published ===false &&
            <PublishButton id={profile._id}/>
            }
        </>
    );
}

export default ProfileDetails;