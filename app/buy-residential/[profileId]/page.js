import DetailsPage from "@/components/template/DetailsPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

const ProfileDetails =async ({params:{profileId}}) => {
    await connectDB()
    const profile = await Profile.findOne({_id:profileId})
    // console.log(profile)
    return (
        <DetailsPage data={profile} />
    );
}

export default ProfileDetails;