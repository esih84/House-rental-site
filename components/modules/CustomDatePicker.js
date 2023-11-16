import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
const CustomDatePicker = ({profileData,setProfileData}) => {
    const changeHandler =(e)=>{
        setProfileData({...profileData,constructionDate:new Date(e)})
        console.log(new Date(e))
    }
    return (
        <div>
            <p>تاریخ ساخت</p>
            <div>
            <DatePicker 
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                value={profileData.constructionDate}
                onChange={changeHandler}
            />

            </div>
        </div>
    );
}

export default CustomDatePicker;