// import moment from "moment/moment";

const DashboardPage = ({createdAt}) => {
    // console.log(createdAt)
    return (
        <div>
            <h3 className=" text-[#304ffe] font-normal text-[1.5rem] mb-5">سلام 🖐</h3>
            <p className=" text-gray-800">آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
            <div className=" mt-[100px] flex bg-[#304ffe18] w-fit py-[5px] px-[10px] rounded-[5px]">
                <p className="m-0 font-normal ml-[10px]">تاریخ عضویت</p>
                {/* <span className=" text-[#304ffe]">{moment(createdAt).format('DD/MM/YYYY')}</span> */}
                <span className=" text-[#304ffe]">{new Date(createdAt).toLocaleDateString('fa-IR')}</span>
            </div>
        </div>
    );
}

export default DashboardPage;