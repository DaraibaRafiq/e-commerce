import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

export default function Offers(){
 return(
    <main className="w-full flex justify-center items-center max-w-screen-2xl mx-auto">
        <div className="w-full sm:w-[80%] h-full sm:h-[150px] bg-black text-white flex flex-col sm:flex-row items-center p-5 rounded-[20px]">
            <h1 className="text-2xl sm:text-4xl font-extrabold">STAY UPTODATE ABOUT OUR LATEST OFFERS</h1>
            <div className="space-y-3">
                <div className="flex justify-start items-center sm:w-[330px] h-[40px] rounded-[62px] ml-2 bg-[#F0F0F0]">
                        <MdOutlineMail className="text-xl ml-2 text-black"/>
                        <input placeholder="search item..." className="w-full h-full rounded-[62px] ml-2 outline-none bg-[#F0F0F0]"></input>
                 </div>
                 <div className="flex justify-center items-center sm:w-[330px] h-[40px] rounded-[62px] ml-2 bg-[#F0F0F0]">
                     <p className="text-black">Subscribe to Newsletter</p>   
                 </div>


            </div>

        </div>
    </main>
 )
}