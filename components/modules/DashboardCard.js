'use client';
import Card from "./Card";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Loading from "./Loading";

const DashboardCard = ({data}) => {
    const router = useRouter()
    const [loading, setLoading]= useState(false)

    const editHandler=()=>{
        router.push(`/Dashboard/my-profile/${data._id}`)
    }
    const deleteHandler=async()=>{
        setLoading(true)

        const res = await fetch(`/api/profile/delete/${data._id}`,{
            method:"DELETE"
        })
        const result = await res.json()
        setLoading(false)

        if (result.error) {
            toast.error(result.error)
        }else{
            toast.success(result.message)
            router.refresh()
        }
    }
    return (
        <div className="flex border-2 border-[#304ffe58] rounded-2xl mb-5">
            <Card data={data}/>
            <div className="flex items-end p-[10px] w-full gap-[10px]">
                <button onClick={editHandler} className="flex justify-center items-center  w-[48%] bg-white cursor-pointer h-10 rounded-lg text-xs sm:text-base border border-green-600 text-green-600 ">ویرایش<FiEdit className=" text-sm sm:text-[1.1rem] "/></button>
                {loading
                ?
                <Loading type="delete"/>
                :
                <button onClick={deleteHandler} className="flex justify-center items-center w-[48%] bg-white cursor-pointer h-10 rounded-lg text-xs sm:text-base border border-red-600 text-red-600">حذف آگهی<AiOutlineDelete className=" text-sm sm:text-[1.1rem] "/></button>
                }
            </div>
            <Toaster/>
        </div>
    );
}

export default DashboardCard;