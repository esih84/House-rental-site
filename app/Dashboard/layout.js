import DashboardSideBar from "@/components/layout/DashboardSideBar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const DashboardLayout = async({children}) => {
    const session = await getServerSession(authOptions)
    // console.log(session)
    if (!session) redirect('/SignIn')
    return (
        <DashboardSideBar>
            {children}
        </DashboardSideBar>
    );
}

export default DashboardLayout;