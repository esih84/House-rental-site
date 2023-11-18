import DashboardSideBar from "@/components/layout/DashboardSideBar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

export const metadata = {
    title: 'پنل کاربری'
  }

const DashboardLayout = async({children}) => {
    const session = await getServerSession(authOptions)
    // console.log(session)
    if (!session) redirect('/SignIn')
    await connectDB()
    const user = await User.findOne({email:session.user.email})
    // console.log(user)
    return (
        <DashboardSideBar role={user.role} email={user.email}>
            {children}
        </DashboardSideBar>
    );
}

export default DashboardLayout;