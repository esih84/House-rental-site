import DashboardCard from "../modules/DashboardCard";

const MyProfilePage = ({profiles}) => {
    // console.log(profiles)
    return (
        <div>
            {profiles.length?null:<p className=" text-red-600 bg-red-900 text-[1.3rem] py-[10px] px-[15px] rounded-[10px]">هیچ آگهی ثبت نشده است</p>}
            {profiles.map(profile=>(
                <DashboardCard key={profile._id} data={JSON.parse(JSON.stringify(profile))}/>
            ))}
        </div>
    );
}

export default MyProfilePage;