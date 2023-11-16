'use client';

import { useState } from "react";
import TextInput from "../modules/TextInput";
import RadioList from "../modules/RadioList";

const AddProfilePage = () => {
    const [profileData,setProfileData]=useState({
        title:"",
        description:"",
        location:"",
        phone:"",
        price:"",
        realestate:"",
        constructionDate:new Date(),
        category:"",
        rules:[],
        amenities:[],
    })
    const submnitHandler=()=>{
        console.log(profileData)
    }
    return (
        <div className=" flex flex-col mb-36">
            <h3 className=" text-2xl font-normal mb-20 w-full bg-[#304ffe18] text-[#304ffe] rounded-[10px] py-[10px] px-[15px] items-center ">ثبت آگهی</h3>
            <TextInput  title="عنوان آگهی" name="title" profleData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="توضیحات" name="description" profleData={profileData} setProfileData={setProfileData} textarea={true}/>
            <TextInput  title="آدرس" name="location" profleData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="شماره تلفن" name="phone" profleData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="قیمت(تومان)" name="price" profleData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="بنگاه" name="realestate" profleData={profileData} setProfileData={setProfileData}/>
            <RadioList profileData={profileData} setProfileData={setProfileData}/>
            <button onClick={submnitHandler} className=" border-none bg-[#304ffe] text-white text-base rounded transition-all cursor-pointer p-[10px] hover:scale-105">ثبت آگهی</button>
        </div>
    );
}

export default AddProfilePage;