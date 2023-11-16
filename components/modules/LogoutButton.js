'use client'
import { signOut } from "next-auth/react";
import { FiLogOut } from 'react-icons/fi';

const LogoutButton = () => {
    return (
        <button onClick={signOut}  className='flex items-center bg-none border-none mt-5 w-full text-right text-base text-red-600 cursor-pointer'>
        <FiLogOut className=' text-[1.2rem] ml-[5px] text-red-600 '/>
        خروج
        </button>
    );
}

export default LogoutButton;