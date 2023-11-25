import { p2e } from "@/utils/replaceNumber";

const TextInput = ({title,name,profileData, setProfileData,type="text", textarea=false}) => {
    const changeHandler=(e)=>{
        setProfileData({...profileData,[e.target.name]:p2e(e.target.value)})
    }
    return (
        <div>
            <p className=" text-[1.1rem] mb-[5px]">{title}</p>
            {textarea?
            <textarea name={name} value={profileData[name]} onChange={changeHandler} className=" mb-10 w-[300px] border border-[#304ffe] border-dashed text-gray-600 rounded p-[10px] text-base  outline-none focus:outline-none focus:border-solid h-24 "/>
            :
            <input name={name} value={profileData[name]} onChange={changeHandler} type={type} className=" mb-10 w-[300px] border border-[#304ffe] border-dashed text-gray-600 rounded p-[10px] text-base h-10 outline-none focus:outline-none focus:border-solid"/>
            }
        </div>
    );
}

export default TextInput;