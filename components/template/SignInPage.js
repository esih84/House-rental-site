'use client';

import {useState} from "react";
import { useRouter } from "next/navigation";
import {signIn} from "next-auth/react"
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from  'react-loader-spinner';
import Loading from "../modules/Loading";
const SignInPage = () => {
    const [form, setForm]=useState({
        email:"",
        password:"",
        isLoading:false
    })
    const {email, password} = form
    const router = useRouter()
    // const {data, status} =useSession()
    // console.log({data, status})
    // if (status === "authenticated") {
    //         router.replace('/dashboard')
    //   }

    
    const signinHandler=async(e)=>{
        e.preventDefault()
        setForm({...form,isLoading:true})
        const res = await signIn("credentials",{email, password, redirect:false})
        setForm({...form,isLoading:false})
        if (res.error) {
            toast.error(res.error,  {
                duration: 6000,
              })
        }else {
            router.push('/')
        }

    }
    return (
        <div className=" flex flex-col justify-center items-center h-[90vh]">
            <h4 className="text-[#304ffe] font-semibold text-[2rem] mb-5">فرم ورود</h4>
            <form className="flex flex-col max-w-[700px] p-10 rounded-xl mb-[30px] border-2 border-[#304ffe] shadow-[0_4px_15px_rgba(48,79,254,0.29)]  ">
                <lable className=" mb-[10px] text-[#304ffe] font-normal">ایمیل</lable>
                <input className=" mb-10 w-[250px] border border-dashed border-[#304ffe] text-gray-600 rounded-[4px] p-[10px] text-base h-10 focus:border-solid focus:outline-none" type="text" name="email" value={form.email} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
                <lable className=" mb-[10px] text-[#304ffe] font-normal">رمز عبور</lable>
                <input className=" mb-10 w-[250px] border border-dashed border-[#304ffe] text-gray-600 rounded-[4px] p-[10px] text-base h-10 focus:border-solid focus:outline-none"  type="password" name="password" value={form.password} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
                {form.isLoading?
                
                <Loading/>
                :
                <button onClick={signinHandler} className=" border-none bg-[#304ffe] text-white text-[1.2rem] font-normal rounded-[5px] transition-all cursor-pointer py-2 hover:scale-105 ">ورود</button>
                }
            </form>
            <p className="text-gray-600 text-[1.1rem]">
                حساب کاربری ندارید؟
                <Link href="/SignUp" className="text-[#304ffe] mr-[10px] border-b-[3px]">ثبت نام</Link>
            </p>
            <Toaster/>
        </div>
    );
}

export default SignInPage;