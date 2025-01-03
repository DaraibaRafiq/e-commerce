import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";
import { MdOutlineAccountCircle } from "react-icons/md";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./NavigationMenu";

export default function Header() {
  return (
    <header className=" w-full h-[60px] bg-white flex justify-between  items-center max-w-screen-2xl mx-auto">
    {/*left*/}
    <div className="flex justify-center items-center">
    <SheetSide/>
    <h1 className="text-xl sm:text-3xl font-bold pl-2">SHOP.CO</h1>
    </div>
    {/*navbar*/}
    <ul className="hidden md:block">
        <li className="space-x-5 flex items-center">
            <Link href={""}>
             < NavigationMenuDemo/>
            </Link>
            <Link href={"/"}>On Sale</Link>
            <Link href={"/products"}>New Arrivals</Link>
            <Link href={"/"}>Brands</Link>
        </li>
    </ul>
    {/*search input*/}
         <div className="hidden md:block">
        <div className="flex justify-start items-center w-[330px] h-[40px] rounded-[62px] ml-2 bg-[#F0F0F0]">
        <IoSearchOutline className="text-xl"/>
        <input placeholder="search item..." className="w-full h-full rounded-[62px] ml-2 outline-none bg-[#F0F0F0]"></input>
        </div>
        </div>
    {/*cart*/}
    <div className="flex items-center mr-8 space-x-5">
    <IoSearchOutline className="text-xl md:hidden"/>
    <Link href={"/cart"}>
    <CgShoppingCart className="text-2xl" />
    </Link>
    <MdOutlineAccountCircle className="text-2xl" />
    </div>
    </header>
  );
}