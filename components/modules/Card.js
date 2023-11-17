import { sp } from "@/utils/replaceNumber";
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
const Card = ({data:{category, title, location, price}}) => {
    const icons ={
        villa:<RiHome3Line className=" text-[1.8rem] bg-[#304ffe58] text-[#304ffe] p-[3px] rounded"/>,
        apartment:<MdApartment className=" text-[1.8rem] bg-[#304ffe58] text-[#304ffe] p-[3px] rounded"/>,
        store:<BiStore className=" text-[1.8rem] bg-[#304ffe58] text-[#304ffe] p-[3px] rounded"/>,
        office:<GiOfficeChair className=" text-[1.8rem] bg-[#304ffe58] text-[#304ffe] p-[3px] rounded"/>
    }
    return (
        <div className=" w-[250px] border-2 border-[#304ffe58] p-[10px] m-[10px] rounded-[10px]">
            <div>
                {icons[category]}
            </div>
            <p className=" font-normal my-[10px] mx-0">{title}</p>
            <p className="flex text-gray-600 text-[0.9rem] items-center gap-1"><HiOutlineLocationMarker className=" text-base"/>{location}</p>
            <span className=" text-gray-600 block text-[0.9rem] mt-[10px] font-normal"> {sp(price)}  تومان</span>
            <Link href="/" className=" flex items-center justify-between mt-5 text-[0.95rem] font-normal text-[#304ffe]">مشاهده آگهی <BiLeftArrowAlt className=" text-2xl"/></Link>
        </div>
    );
}

export default Card;