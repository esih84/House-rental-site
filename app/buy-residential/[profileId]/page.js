import { authOptions } from "@/api/auth/[...nextauth]/route";
import PublishButton from "@/components/modules/PublishButton";
import DetailsPage from "@/components/template/DetailsPage";
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

const ProfileDetails =async ({params:{profileId}}) => {
    await connectDB()

    // console.log(profile)
    const session = await getServerSession(authOptions)
    if(!session)redirect('/SignIn')
    await connectDB()
    const user = await User.findOne({email:session.user.email})
    const profile = await Profile.findOne({_id:profileId})
    return (
        <>
        
            <DetailsPage data={profile} />
            {user.role==="ADMIN"&& profile.published ===false &&
            <PublishButton id={profile._id}/>
            }
        </>
    );
}

export default ProfileDetails;