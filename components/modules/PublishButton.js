'use client'
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"

const PublishButton = ({id}) => {
    const pathName = usePathname()
    // console.log(pathName)
    const router = useRouter()
    const publishHandler=async()=>{
        const res = await fetch(`/api/profile/publish/${id}`,{
            method:'PATCH'
        })
        const result = await res.json()
        if (result.message) {

            toast.success(result.message)
            router.refresh()
        }
    }
    const deleteHandler=async()=>{
        const res = await fetch(`/api/profile/publish/${id}`,{
            method:'DELETE'
        })
        const result = await res.json()
        if (result.message) {

            toast.success(result.message)
            router.refresh()
        }
    }
    return (
        <div className="flex item-center text-center justify-start gap-2 mt-5 ">
            <button onClick={publishHandler} className="bg-green-600 text-white  cursor-pointer transition-all rounded font-normal text-base py-[5px] px-[15px] border-none hover:text-black">انتشار</button>
            <button onClick={deleteHandler}  className="bg-white cursor-pointer  rounded text-base border py-[5px] px-[10px] border-red-600 text-red-600">حذف آگهی</button>
            {pathName === "/admin"&&
                <Link href={`/buy-residential/${id}`} className="text-[#304ffe] my-auto">دیدن جزئیات</Link>

            }
            {/* {children} */}
            <Toaster/>
        </div>
    );
}

export default PublishButton;