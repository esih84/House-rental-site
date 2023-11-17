import AddProfilePage from "@/components/template/AddProfilePage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

const EditPage =async ({params:{profileId}}) => {
    await connectDB()
    const profile = await Profile.findOne({_id:profileId})
    if (!profile) {
        return <h3>مشکلی پیش آمده است لطفا دوباره امتحان کنید</h3>
    }
    return (
        <AddProfilePage data={JSON.parse(JSON.stringify(profile))}/>
    );
}

export default EditPage;