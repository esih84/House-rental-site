const RadioList = ({profileData, setProfileData}) => {
    const changeHandler=(e)=>{
        setProfileData({...profileData,[e.target.name]:e.target.value})
    }
    return (
        <div className=" mb-10">
            <p className=" text-[1.1rem] mb-[5px]">دسته بندی</p>
            <div className=" flex">
                <div className=" flex items-center justify-evenly bg-[#304ffe18] text-[#304ffe] ml-[30px] w-[70px] py-[3px] px-[5px] rounded cursor-pointer">
                    <label htmlFor="villa">ویلا</label>
                    <input type="radio" name="category" value="villa" id="villa" checked={profileData.category==="villa"} onChange={changeHandler}/>
                </div>
                <div className=" flex items-center justify-evenly bg-[#304ffe18] text-[#304ffe] ml-[30px] w-[70px] py-[3px] px-[5px] rounded cursor-pointer">
                    <label htmlFor="apartment">آپارتمان</label>
                    <input type="radio" name="category" value="apartment" id="apartment" checked={profileData.category==="apartment"} onChange={changeHandler}/>
                </div>
                <div className=" flex items-center justify-evenly bg-[#304ffe18] text-[#304ffe] ml-[30px] w-[70px] py-[3px] px-[5px] rounded cursor-pointer">
                    <label htmlFor="store">مغازه</label>
                    <input type="radio" name="category" value="store" id="store" checked={profileData.category==="store"} onChange={changeHandler}/>
                </div>
                <div className=" flex items-center justify-evenly bg-[#304ffe18] text-[#304ffe] ml-[30px] w-[70px] py-[3px] px-[5px] rounded cursor-pointer">
                    <label htmlFor="office">دفتر</label>
                    <input type="radio" name="category" value="office" id="store" checked={profileData.category==="office"} onChange={changeHandler}/>
                </div>
            </div>
        </div>
    );
}

export default RadioList;