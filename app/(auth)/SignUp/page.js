import SignUpPage from "@/components/template/SignUpPage";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
const SignUp =async () => {
    const session = await getServerSession(authOptions)
    // console.log(session)
    if (session) redirect('/')
    return <SignUpPage/>
}

export default SignUp;