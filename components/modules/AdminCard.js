'use client'
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import PublishButton from "./PublishButton";

const AdminCard = ({data:{title,description, location,price,_id}}) => {
    const router = useRouter()
    const publishHandler=async()=>{
        const res = await fetch(`/api/profile/publish/${_id}`,{
            method:'PATCH'
        })
        const result = await res.json()
        if (result.message) {

            toast.success(result.message)
            router.refresh()
        }
    }
    const deleteHandler=async()=>{
        const res = await fetch(`/api/profile/publish/${_id}`,{
            method:'DELETE'
        })
        const result = await res.json()
        if (result.message) {

            toast.success(result.message)
            router.refresh()
        }
    }
    return (
        <div className=" border-b-2 border-[#304ffe] pb-[10px] mb-20">
            <h3 className=" text-[1.2rem] font-normal text-[#304ffe] mb-5">{title}</h3>
            <p className=" text-justify mb-5">{description}</p>
            <div className="flex mb-5">
                <span className=" bg-[#304ffe58] text-[#304ffe] py-[5px] px-[10px] ml-[15px] rounded">{location}</span>
                <span className=" bg-[#304ffe58] text-[#304ffe] py-[5px] px-[10px] ml-[15px] rounded">{sp(price)}تومان</span>
            </div>
            <PublishButton id={_id}>

                {/* <Link href={`/buy-residential/${_id}`} className="text-[#304ffe] my-auto">دیدن جزئیات</Link> */}
            </PublishButton>
            <Toaster/>
        </div>
    );
}

export default AdminCard;