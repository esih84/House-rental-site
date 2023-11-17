import { FaCity } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
import CategoryCard from "../modules/CategoryCard";
import { categories, cities, services } from "@/utils/constans";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col-reverse justify-center items-center rounded-[10px] p-5 my-[100px]">
        <div className=" w-full text-center text-[#304ffe]">
          <h1 className=" font-bold text-3xl md:text-5xl mb-[30px]">
            سامانه خرید و اجاره ملک
          </h1>
          <ul className=" flex justify-center flex-wrap list-none">
            {services.map((service) => (
              <li
                key={service}
                className=" flex items-center w-20 m-[10px] bg-[#bbdefb] py-[5px] px-[10px] rounded-[5px]"
              >
                <FiCircle />
                <span className=" font-normal mr-[5px] h-5">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center sm:justify-between flex-wrap  my-[50px]">
        {Object.keys(categories).map((i) => (
          <CategoryCard title={categories[i]} name={i} />
        ))}
      </div>
      <div className="  my-[100px]">
        <h3 className=" font-semibold text-[2rem] text-[#304ffe] text-center">
          شهر های پر بازدید
        </h3>
        <ul className="flex justify-center sm:justify-between flex-wrap mt-[50px] list-none">
          {cities.map((i) => (
            <li
              key={i}
              className=" gap-[15px] text-[#304ffe] bg-[#bbdefb] w-[250px] text-[1.2rem] flex justify-center items-center p-[10px] rounded-[10px] my-[10px] "
            >
              <FaCity />
              <span className=" h-[30px] font-normal">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
