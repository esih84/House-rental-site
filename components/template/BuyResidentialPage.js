import Card from "../modules/Card";
import SideBar from "../modules/SideBar";

const BuyResidentialPage = ({data}) => {
    return (
        <div className=" flex flex-col sm:flex-row   justify-between mt-20">
            <div className=" flex flex-col mx-auto w-full  h-fit py-[30px] px-[15px] rounded-[10px]  shadow-[0_4px_15px_rgba(48,79,254,0.29)] sm:ml-10 sm:w-[220px]">
                <SideBar/>
            </div>
            <div className=" w-full flex flex-wrap  justify-center sm:justify-stretch">
                {data.length?
                    data.map(profile=>(
                        <Card key={profile._id} data={profile}/>
                    ))
                :
                    <p className=" bg-red-600 text-red-900 text-[1.3rem] py-[10px] px-[15px] rounded-[10px] h-[50px]">هیچ آگهی ثبت نشده است</p>
                }
            </div>
        </div>
    );
}

export default BuyResidentialPage;