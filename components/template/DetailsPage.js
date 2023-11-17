import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiHomebridge } from "react-icons/si";
import ItemList from "../modules/ItemList";
import Title from "../modules/Title";
import { AiOutlinePhone } from "react-icons/ai";
import { e2p, sp } from "@/utils/replaceNumber";
import { categories, icons } from "@/utils/constans";
import { BiCalendarCheck } from "react-icons/bi";
import ShareButton from "../modules/ShareButton";

const DetailsPage = ({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realestate,
    phone,
    price,
    category,
    constructionDate,
  },
}) => {
  return (
    <div className="flex mt-14">
      <div className="w-full">
        <h1 className="text-[#304ffe] text-[1.3rem] font-normal mb-[10px]">
          {title}
        </h1>
        <span className="flex items-start h-[15px] mb-12 text-gray-600">
          <HiOutlineLocationMarker className=" text-[1.2rem] ml-[5px]" />{" "}
          {location}
        </span>
        <Title title="توضیحات" />
        <p className=" text-justify mb-12">{description}</p>
        <Title title="امکانات" />
        <ItemList item={amenities} />
        <Title title="قوانین" />
        <ItemList item={rules} />
      </div>
      <div className=" w-[250px] mr-10">
        <div className="flex flex-col items-center shadow-[0_4px_15px_rgba(48,79,254,0.29)] p-[10px] rounded-lg mb-5">
          <SiHomebridge className=" text-5xl text-[#304ffe] mt-[10px] my-0 mb-5" />
          <p className=" text-[1.1rem] font-normal">{realestate}</p>
          <span className="flex items-center text-gray-600 mt-5">
            <AiOutlinePhone className=" text-[1.4rem] m-0 ml-[5px] text-gray-600 " />
            {e2p(phone)}
          </span>
        </div>
        <ShareButton />
        <div className="flex flex-col items-center pt-5 shadow-[0_4px_15px_rgba(48,79,254,0.29)] p-[10px] rounded-lg mb-5">
          <p className=" flex items-center text-gray-600 mb-5 h-5 gap-[5px]">
            {icons[category]}
            {categories[category]}
          </p>
          <p className=" flex items-center text-gray-600 mb-5 h-5">
            {sp(price)}تومان
          </p>
          <p className=" flex items-center  text-gray-600 mb-5 h-5">
            <BiCalendarCheck className=" text-[1.5rem] ml-[5px] text-[#304ffe]" />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
