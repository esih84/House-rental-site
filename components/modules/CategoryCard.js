import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({title,name}) => {
    return (
        <div className=" overflow-hidden rounded-[15px] transition-all my-[10px] p-[10px] shadow-[0_4px_15px_rgba(48,79,254,0.29)] md:hover:-rotate-6">
            <Link href={`/buy-residential?category=${name}`}>
                <Image src={`/images/${name}.png`} alt={title} width={240} height={144}  priority={true} className="rounded-[10px]"/>
                <p className=" text-[1.2rem] font-normal text-[#304ffe] text-center mt-[10px] mb-[5px]">{title}</p>
            </Link>
        </div>
    );
}

export default CategoryCard;