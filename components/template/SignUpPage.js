'use client';

import {useState} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from  'react-loader-spinner';
import Loading from "../modules/Loading";
const SignUpPage = () => {
    const [form, setForm]=useState({
        email:"",
        password:"",
        rePassword:"",
        isLoading:false
    })
    const {email, password} = form
    const router = useRouter()
    // const {data, status} =useSession()
    // console.log({data, status})
    // if (status === "authenticated") {
    //         router.replace('/dashboard')
    //   }

    
    const signupHandler=async(e)=>{
        e.preventDefault()
        if (form.password !== form.rePassword) {
            toast.error("رمز و تکرار آن برابر نیست",  {
                duration: 6000,
              })
            return;
        }
        setForm({...form,isLoading:true})
        const res = await fetch('/api/auth/signup',{
            method:"POST",
            body:JSON.stringify({email, password}),
            headers:{'Content-Type': "application/json"}
        })
        const data = await res.json()
        setForm({...form,isLoading:false})
        if (data.error) {
            toast.error(data.error,  {
                duration: 6000,
              })
        }
        if (res.status===201) {
            router.push('/SignIn')
        }

    }
    return (
        <div className=" flex flex-col justify-center items-center h-[90vh]">
            <h4 className="text-[#304ffe] font-semibold text-[2rem] mb-5">فرم ثبت نام</h4>
            <form className="flex flex-col max-w-[700px] p-10 rounded-xl mb-[30px] border-2 border-[#304ffe] shadow-[0_4px_15px_rgba(48,79,254,0.29)]  ">
                <lable className=" mb-[10px] text-[#304ffe] font-normal">ایمیل</lable>
                <input className=" mb-10 w-[250px] border border-dashed border-[#304ffe] text-gray-600 rounded-[4px] p-[10px] text-base h-10 focus:border-solid focus:outline-none" type="text" name="email" value={form.email} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
                <lable className=" mb-[10px] text-[#304ffe] font-normal">رمز عبور</lable>
                <input className=" mb-10 w-[250px] border border-dashed border-[#304ffe] text-gray-600 rounded-[4px] p-[10px] text-base h-10 focus:border-solid focus:outline-none"  type="password" name="password" value={form.password} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
                <lable className=" mb-[10px] text-[#304ffe] font-normal">تکرار رمز عبور</lable>
                <input className=" mb-10 w-[250px] border border-dashed border-[#304ffe] text-gray-600 rounded-[4px] p-[10px] text-base h-10 focus:border-solid focus:outline-none"  type="password" name="rePassword" value={form.rePassword} onChange={e=>setForm({...form,[e.target.name]:e.target.value})}/>
                {form.isLoading?
                
                <Loading/>                
                :
                <button onClick={signupHandler} className=" border-none bg-[#304ffe] text-white text-[1.2rem] font-normal rounded-[5px] transition-all cursor-pointer py-2 hover:scale-105 ">ثبت نام</button>
                }
            </form>
            <p className="text-gray-600 text-[1.1rem]">
                حساب کاربری دارید؟
                <Link href="/SignIn" className="text-[#304ffe] mr-[10px] border-b-[3px]">ورود</Link>
            </p>
            <Toaster/>
        </div>
    );
}

export default SignUpPage;