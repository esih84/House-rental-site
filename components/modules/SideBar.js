import { categories } from "@/utils/constans";
import Link from "next/link";
import { HiFilter } from "react-icons/hi";

const SideBar = () => {
  return (
    <div className=" flex justify-center sm:justify-start flex-row sm:flex-col flex-wrap">
      <p className=" flex justify-start  items-center text-lg sm:text-[1.2rem] font-normal text-[#304ffe]">
        <HiFilter className=" ml-[5px] text-[1.2rem] sm:text-[1.3rem] text-[#304ffe]" />
        دسته بندی
      </p>
      <Link href="/buy-residential" className=" text-gray-600 m-[5px]">
        همه
      </Link>
      {Object.keys(categories).map((i) => (
        <Link
          href={{
            pathname: "/buy-residential",
            query: { category: i },
          }}
          className=" text-gray-600 m-[5px]"
        >
          {categories[i]}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
