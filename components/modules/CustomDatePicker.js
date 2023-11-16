import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
const CustomDatePicker = ({profileData,setProfileData}) => {
    const changeHandler =(e)=>{
        setProfileData({...profileData,constructionDate:new Date(e)})
        // console.log(e)
        // console.log(new Date(e))
    }
    return (
        <div className=" mb-16">
            <p className="mb-[5px]">تاریخ ساخت</p>
            <DatePicker 
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                value={profileData.constructionDate}
                onChange={changeHandler}
                style={{width:"110px", border:"1px dashed #304ffe",color:"gray",padding:"10px",height:"30px",marginLeft:"10px", fontSize:"1rem", textAlign:"center", borderRadius:"4px"}}
            />

        </div>
    );
}

export default CustomDatePicker;