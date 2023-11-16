import DashboardPage from "@/components/template/DashboardPage";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

const Dashboard =async() => {
    const session = await getServerSession(authOptions)
    await connectDB()
    const user = await User.findOne({email:session.user.email})
    // console.log(user)
    return (
        <>
          <DashboardPage createdAt={user.createdAt}/>  
        </>
    );
}

export default Dashboard;