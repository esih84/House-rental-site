'use client';

import { useState } from "react";
import TextInput from "../modules/TextInput";
import RadioList from "../modules/RadioList";
<<<<<<< HEAD
import TextList from "../modules/TextList";
=======
>>>>>>> f92eb827a6b6cac5d29d0f7d88c9d5b5dd5d1445

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
<<<<<<< HEAD
            <TextInput  title="عنوان آگهی" name="title" profileData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="توضیحات" name="description" profileData={profileData} setProfileData={setProfileData} textarea={true}/>
            <TextInput  title="آدرس" name="location" profileData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="شماره تلفن" name="phone" profileData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="قیمت(تومان)" name="price" profileData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="بنگاه" name="realestate" profileData={profileData} setProfileData={setProfileData}/>
            <RadioList profileData={profileData} setProfileData={setProfileData}/>
            <TextList title="امکانات رفاهی" profileData={profileData} setProfileData={setProfileData} type="amenities" />
            <TextList title="قوانین" profileData={profileData} setProfileData={setProfileData} type="rules" />
=======
            <TextInput  title="عنوان آگهی" name="title" profleData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="توضیحات" name="description" profleData={profileData} setProfileData={setProfileData} textarea={true}/>
            <TextInput  title="آدرس" name="location" profleData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="شماره تلفن" name="phone" profleData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="قیمت(تومان)" name="price" profleData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="بنگاه" name="realestate" profleData={profileData} setProfileData={setProfileData}/>
            <RadioList profileData={profileData} setProfileData={setProfileData}/>
>>>>>>> f92eb827a6b6cac5d29d0f7d88c9d5b5dd5d1445
            <button onClick={submnitHandler} className=" border-none bg-[#304ffe] text-white text-base rounded transition-all cursor-pointer p-[10px] hover:scale-105">ثبت آگهی</button>
        </div>
    );
}

export default AddProfilePage;