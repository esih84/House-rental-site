import { CgProfile } from 'react-icons/cg';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import Link from 'next/link';

import LogoutButton from '../modules/LogoutButton';

const DashboardSideBar =async ({children}) => {
    const session =await getServerSession(authOptions)

    return (
        <div className="flex flex-col md:flex-row justify-between mt-20">
            <div className=" flex flex-col items-center ml-10 w-[220px] h-fit py-[30px] px-[15px] rounded-xl shadow-[0_4px_15px_rgba(48,79,254,0.29)]">
                <CgProfile className=' text-5xl text-[#304ffe]'/>
                <p className=' text-gray-600 text-[1.1rem] font-normal mt-5 '>{session?.user.email}</p>
                <span className=' bg-gray-400 w-full h-[1px] mb-7 '></span>
                <Link href='/Dashboard' className=' my-[5px] font-normal w-full'>حساب کاربری</Link>
                <Link href='/Dashboard/my-profile' className=' my-[5px] font-normal w-full'>آگهی های من</Link>
                <Link href='/Dashboard/add' className=' my-[5px] font-normal w-full'>ثبت آگهی</Link>
                <LogoutButton/>
            </div>
            <div className='w-full'>{children}</div>
        </div>
    );
}

export default DashboardSideBar;