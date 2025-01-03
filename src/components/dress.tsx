import Image from "next/image";

export default function Dress(){
    return(
        <div className="w-full h-full sm:h-[500px] mt-8 sm:mt-0 bg-[#F0F0F0] flex flex-col justify-start items-center pt-8 max-w-screen-2xl mx-auto">
            {/*top div*/}
            <div className="mt-2">
                <h1 className="text-3xl font-bold pl-6 sm:pl-0">BROWSE BY DRESS STYLE</h1>
            </div>
            {/*bottom div*/}
            <div className="w-[90%] h-full sm:h-[600px] flex flex-wrap justify-center items-center mt-5">
                <div className="w-[400px] m-1 h-[200px] relative">
                    <Image src={"/categ1.png"} alt={"dress"} width={100} height={100} className="w-full h-full rounded-[20px]"></Image>
                    <span className="absolute top-10 left-5">Casual</span>
                </div>
                <div className="w-[600px] m-1 h-[200px] relative">
                    <Image src={"/categ3.png"} alt={"dress"} width={100} height={100} className="w-full h-full rounded-[20px]"></Image>
                    <span className="absolute top-10 left-5">Formal</span>
                </div>
                <div className="w-[600px] m-1 h-[200px] relative">
                    <Image src={"/categ2.png"} alt={"dress"} width={100} height={100} className="w-full h-full rounded-[20px]"></Image>
                    <span className="absolute top-10 left-5">Party</span>
                </div>
                <div className="w-[400px] m-1 h-[200px] relative">
                    <Image src={"/categ4.png"} alt={"dress"} width={100} height={100} className="w-full h-full rounded-[20px]"></Image>
                    <span className="absolute top-10 left-5">Gym</span>
                </div>
            
                
            </div>

        </div>
    )
}