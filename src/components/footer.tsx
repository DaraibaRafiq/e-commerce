import Offers from "./offers";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";


export default function Footer (){
    return(
        <main className="bg-[#F0F0F0] w-full h-full md:h-[450px] relative mt-32 max-w-screen-2xl mx-auto">
        {/*   */}
        <span className="absolute top-[-80px] left-0 sm:left-16">
            <Offers/>
        </span>
        {/*container*/}
        <div className="flex  h-full md:h-[400px] flex-col md:flex-row justify-between items-start p-5 pt-[160px] sm:pt-32 border-b">
        {/*top div*/}
        <div className="flex flex-col justify-center items-center w-[200px]">
            <ul>
                <h2 className="text-2xl sm:text-3xl font-extrabold">SHOP.CO</h2>
                 <p className="text-sm mt-1">We We have clothes that suits your style and which you are proud to wear. From women to men.</p>
                 <div className="flex items-center space-x-3 mt-1">
                 <FaFacebook className="text-xl"/>
                 <FaInstagram className="text-xl"/>
                 <FaGithub className="text-xl" />
                 <FaTwitter className="text-xl"/>
                 </div>
            </ul>
        </div>
        {/*mid div */}
        <div className="w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 place-items-center space-y-4">
            {/*box1*/}
            <ul className="space-y-3">
                <h2 className="text-sm sm:text-2xl">COMPANY</h2>
                <li className="text-sm">About </li>
                <li className="text-sm">Features</li>
                <li className="text-sm">Work</li>
                <li className="text-sm">Carrers</li>
            </ul>
            {/*box2*/}
            <ul className="space-y-3">
                <h2 className="text-sm sm:text-2xl">HELP</h2>
                <li className="text-sm">Customer Support</li>
                <li className="text-sm">Delivery Details</li>
                <li className="text-sm">Terms and Conditions</li>
                <li className="text-sm">Privacy Policy</li>
            </ul>
            {/*box3*/}
            <ul className="space-y-3">
                <h2 className="text-sm sm:text-2xl">FAQ</h2>
                <li className="text-sm">Account</li>
                <li className="text-sm">Manage Deliveries</li>
                <li className="text-sm">Orders</li>
                <li className="text-sm">Payments</li>
            </ul>
            {/*box4*/}
            <ul className="space-y-3">
                <h2 className="text-sm sm:text-2xl">RESOURCES</h2>
                <li className="text-sm">Free e-book</li>
                <li className="text-sm">Development Tutorial</li>
                <li className="text-sm">How to-blog</li>
                <li className="text-sm">Youtube Playlist</li>
            </ul>

        </div>
        
        </div>
        {/*bottom div*/}
        <div className="flex  flex-col sm:flex-row justify-between items-center mt-3">
            <p className="text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex  items-center">
               <Image src={"/Badge1.png"} alt={"pic"} width={100} height={100} className="w-[50px]"></Image>
               <Image src={"/Badge2.png"} alt={"pic"} width={100} height={100} className="w-[50px]"></Image>
               <Image src={"/Badge3.png"} alt={"pic"} width={100} height={100} className="w-[50px]"></Image>
               <Image src={"/Badge4.png"} alt={"pic"} width={100} height={100} className="w-[50px]"></Image>
               <Image src={"/Badge5.png"} alt={"pic"} width={100} height={100} className="w-[50px]"></Image>
            </div>
        </div>
        </main>
    )
}