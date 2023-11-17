'use client'
import { useEffect, useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {LuShare2} from "react-icons/lu"
const ShareButton = () => {
    const [url, setUrl] = useState("")
    useEffect(()=>{
        setUrl(window.location.href)
    },[])
    return (
        <CopyToClipboard text={url}>
            <div  className='flex items-center justify-center cursor-pointer group   shadow-[0_4px_15px_rgba(48,79,254,0.29)] p-[10px] rounded-lg mb-5 '>
            <LuShare2 className=' text-[#304ffe] ml-[10px] text-[1.2rem]'/>
            <button className=' border-none bg-none text-base text-gray-600 h-5 transition-all cursor-pointer group-hover:text-[#304ffe] '>اشتراک گذاری</button>
         </div>
        </CopyToClipboard>

    );
}

export default ShareButton;