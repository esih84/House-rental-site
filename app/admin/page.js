import DashboardSideBar from "@/components/layout/DashboardSideBar";
import AdminPage from "@/components/template/AdminPage";
import Profile from "@/models/Profile";
import User from "@/models/User";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export const metadata = {
    title:'پنل ادمین'
  }
const Admin =async () => {
    const session = await getServerSession(authOptions)
    if(!session)redirect('/SignIn')
    await connectDB()
    const user = await User.findOne({email:session.user.email})
    if(user.role!=="ADMIN")redirect('/Dashboard')
    const profiles = await Profile.find({published:false})
    // console.log(profiles)
    return (
        <DashboardSideBar role={user.role} email={user.email}>
            <AdminPage profiles={profiles}/>
        </DashboardSideBar>
    );
}

export default Admin;