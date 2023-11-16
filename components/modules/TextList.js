import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const TextList = ({title,profileData, setProfileData, type}) => {
    const addHandler=(e)=>{
        setProfileData({...profileData,[type]:[...profileData[type],""]})
    }
    const changeHandler=(e, index)=>{
        const list = [...profileData[type]]
        list[index]= e.target.value
        setProfileData({...profileData,[type]:list})
    }
    const deleteHandler =(index)=>{
        const list = [...profileData[type]]
        list.splice(index,1)
        setProfileData({...profileData,[type]:list})
    }
    return (
        <div className=" mb-10">
            <p className=" text-[1.1rem] mb-[5px]">{title}</p>
            {profileData[type].map((i,index)=>(
                    <div key={index} className=" flex my-[10px]">
                        <input type="text" value={i} onChange={e=>changeHandler(e,index)} className=" w-[300px] border border-[#304ffe] outline-none border-dashed rounded text-gray-600 h-[30px] ml-[10px] p-[10px] focus:border-solid focus:outline-none" />
                        <button onClieck={e=>deleteHandler(index)} className=" flex items-center m-0 bg-white text-[#db0505] line border border-[#db0505] rounded  outline-none">حذف <AiOutlineDelete/></button>
                    </div>
            ))}
            <button onClick={addHandler} className="flex mt-5 items-center hover:scale-105 border-none bg-[#304ffe] text-white text-base rounded transition-all cursor-pointer py-1 px-2">افزودن<MdOutlineLibraryAdd className=" mr-[5px] text-[1.2rem]"/></button>
        </div>
    );
}

export default TextList;