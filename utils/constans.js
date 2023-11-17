import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";

const categories = {
    apartment: "آپارتمان",
    villa: "ویلا",
    store: "مغازه",
    office: "دفتر",
  };
  const icons ={
    villa:<RiHome3Line className=" text-[1.8rem] bg-[#304ffe58] text-[#304ffe] p-[3px] rounded"/>,
    apartment:<MdApartment className=" text-[1.8rem] bg-[#304ffe58] text-[#304ffe] p-[3px] rounded"/>,
    store:<BiStore className=" text-[1.8rem] bg-[#304ffe58] text-[#304ffe] p-[3px] rounded"/>,
    office:<GiOfficeChair className=" text-[1.8rem] bg-[#304ffe58] text-[#304ffe] p-[3px] rounded"/>
}
  
const services = ["خرید", "فروش", "رهن", "اجاره"];
const cities = [
  "تهران",
  "سنندج",
  "کرمانشاه",
  "اهواز",
  "مشهد",
  "اصفهان",
  "شیراز",
  "خرم آباد",
];
  export {categories, icons,cities,services}