'use client';

import { useState } from "react";
import TextInput from "../modules/TextInput";
import RadioList from "../modules/RadioList";
import TextList from "../modules/TextList";
import CustomDatePicker from "../modules/CustomDatePicker";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import Loading from "../modules/Loading";


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
    const [loading, setLoading]= useState(false)
    const submnitHandler=async()=>{
        setLoading(true)
        const res= await fetch('/api/profile',{
            method:"POST",
            body:JSON.stringify(profileData),
            headers:{"Content-Type":"application/json"}
        })
        const data = await res.json()
        setLoading(false)
        if (data.error) {
            toast.error(data.error)
            // console.log(data.error)
        }else{
            toast.success(data.message)
        }
    }
    return (
        <div className=" flex flex-col mb-36">
            <h3 className=" text-2xl font-normal mb-20 w-full bg-[#304ffe18] text-[#304ffe] rounded-[10px] py-[10px] px-[15px] items-center ">ثبت آگهی</h3>

            <TextInput  title="عنوان آگهی" name="title" profileData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="توضیحات" name="description" profileData={profileData} setProfileData={setProfileData} textarea={true}/>
            <TextInput  title="آدرس" name="location" profileData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="شماره تلفن" name="phone" profileData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="قیمت(تومان)" name="price" profileData={profileData} setProfileData={setProfileData}/>
            <TextInput  title="بنگاه" name="realestate" profileData={profileData} setProfileData={setProfileData}/>
            <RadioList profileData={profileData} setProfileData={setProfileData}/>
            <TextList title="امکانات رفاهی" profileData={profileData} setProfileData={setProfileData} type="amenities" />
            <TextList title="قوانین" profileData={profileData} setProfileData={setProfileData} type="rules" />
            <CustomDatePicker profileData={profileData} setProfileData={setProfileData}/>
            <Toaster/>
            {loading
                ?
                <Loading/>
                :
            <button onClick={submnitHandler} className=" border-none bg-[#304ffe] text-white text-base rounded transition-all cursor-pointer p-[10px] hover:scale-105">ثبت آگهی</button>
            }
        </div>
    );
}

export default AddProfilePage;