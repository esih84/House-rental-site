'use client';

import {useState} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignUpPage = () => {
    const [form, setForm]=useState({
        email:"",
        password:"",
        rePassword:""
    })

    const router = useRouter()
    // const {data, status} =useSession()
    // console.log({data, status})
    // if (status === "authenticated") {
    //         router.replace('/dashboard')
    //   }

    
    const signupHandler=async()=>{
        const res = await fetch('/api/auth/SignUp',{
            method:"POST",
            body:JSON.stringify(form),
            headers:{'Content-Type': "application/json"}
        })
        const data = await res.json()
        console.log(data)
        // if (data.status === "success") {
        //     router.push("/")
        // }

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
                <button onClick={signupHandler} className=" border-none bg-[#304ffe] text-white text-[1.2rem] font-normal rounded-[5px] transition-all cursor-pointer py-2 hover:scale-105 ">ثبت نام</button>
            </form>
            <p className="text-gray-600 text-[1.1rem]">
                حساب کاربری دارید؟
                <Link href="/SignIn" className="text-[#304ffe] mr-[10px] border-b-[3px]">ورود</Link>
            </p>
        </div>
    );
}

export default SignUpPage;