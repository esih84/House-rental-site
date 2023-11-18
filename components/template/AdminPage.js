import AdminCard from "../modules/AdminCard";

const AdminPage = ({profiles}) => {
    return (
        <div>
            {profiles.length?
                profiles.map(profile=>(
                    <AdminCard key={profile._id} data={JSON.parse(JSON.stringify(profile))}/>
                ))
            :<p className="text-[1.3rem] py-[10px] px-[15px] rounded-lg bg-red-900 text-red-600">هیچ آگهی در انتظار تاییدی  وجود ندارد</p>}
        </div>
    );
}

export default AdminPage;