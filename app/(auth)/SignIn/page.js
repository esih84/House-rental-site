import SignInPage from "@/components/template/SignInPage";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
const SignIn = async() => {
    const session = await getServerSession(authOptions)
    // console.log(session)
    if (session) redirect('/')
    return (<SignInPage/>)
}

export default SignIn;