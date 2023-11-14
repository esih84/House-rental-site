import Link from 'next/link';
import { FiLogIn } from 'react-icons/fi';
const Header = () => {
    return (
        <header className="flex justify-between items-center p-5 my-5 rounded-xl  bg-[#304ffe] text-white">
            <div>
                <ul className=" list-none flex">
                    <li className=" ml-3 md:ml-7 ">
                        <Link href="/">صفحه اصلی</Link>
                    </li>
                    <li className=" ml-3 md:ml-7 ">
                        <Link href="/buy-residential">آگهی ها</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link href="/SingIn" className=" flex items-center py-1 px-2 bg-white text-[#304ffe] rounded-[4px] transition-all hover:text-white hover:bg-[#304ffe]">
                    <FiLogIn className=" text-[25px]"/>
                    <span className="mr-1">ورود</span>
                    </Link>
            </div>
        </header>
    );
}

export default Header;