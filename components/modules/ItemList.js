const ItemList = ({item}) => {
    return (
        <div>
                {item.length?
                <ul className=" pr-5 mb-12">
                    {item.map((i,index)=>(
                        <li key={index} className=" list-disc marker:text-[#304ffe]">{i}</li>
                    ))}
                </ul>
                :<p className=" text-justify mb-12">هیچ موردی ذکر نشده است</p>}
        </div>
    );
}

export default ItemList;