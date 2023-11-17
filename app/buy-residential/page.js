import BuyResidentialPage from "@/components/template/BuyResidentialPage";

const BuyResidential =async ({searchParams:{category}}) => {
    // حالت تمرینی دارد
    const res = await fetch('http://localhost:3000/api/profile', {cache:"no-store"})
    const data = await res.json()
    // console.log(data)
    let finallData = data.data
    if (category) {
        finallData = finallData.filter(i=>i.category=== category)
    }
    return (
        <BuyResidentialPage data={finallData}/>
    );
}

export default BuyResidential;