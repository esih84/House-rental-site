import { ThreeDots } from "react-loader-spinner";

const Loading = ({type}) => {
    if (type && type==="delete") {
        return(
        <ThreeDots height="45"  radius="9" color="red" ariaLabel="three-dots-loading"wrapperStyle={{alignItem:"end",margin:"auto"}} wrapperClassName=""visible={true}/>

        )
    }
    return (

        <ThreeDots height="45"  radius="9" color="#304ffe" ariaLabel="three-dots-loading"wrapperStyle={{margin:"auto"}} wrapperClassName=""visible={true}/>
        
    );
}

export default Loading;