import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
interface Iproducts{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string,
    img_url:string,
}
let product:Iproducts[] = [
    {
        title:"T-SHIRT WITH TAPE DETAILS",
        id:1,
        price:"$120",
        img_url:"/product1.png"
    },
    {
        title:"SKINNY FIT JEANS",
        id:2,
        price:"$240",
        img_url:"/product2.png",
        old_price:"$260"
    },
    {
        title:"CHECKERED SHIRT",
        id:3,
        price:"$180",
        img_url:"/product3.png"
    },
    {
        title:"SLEEVE STRIPPED T-SHIRT",
        id:4,
        price:"$130",
        img_url:"/product4.png",
        old_price:"$160"
    },
    {
        title:"CHECKERED SHIRT",
        id:3,
        price:"$180",
        img_url:"/product3.png"
    },
    {
        title:"SLEEVE STRIPPED T-SHIRT",
        id:4,
        price:"$130",
        img_url:"/product4.png",
        old_price:"$160"
    },
    {
        title:"SLEEVE STRIPPED T-SHIRT",
        id:4,
        price:"$130",
        img_url:"/product4.png",
        old_price:"$160"
    },
    {
        title:"CHECKERED SHIRT",
        id:3,
        price:"$180",
        img_url:"/product3.png"
    },
    {
        title:"SLEEVE STRIPPED T-SHIRT",
        id:4,
        price:"$130",
        img_url:"/product4.png",
        old_price:"$160"
    },
]

let star = [
    <FaStar key={1}/>,
    <FaStar key={2} />,
    <FaStar key={3}/>,
    <FaStar key={4}/>,
    <FaStar key={5}/>,
    ]
    

export default function CasualShirts(){
    return(
        <div className="w-full h-full sm:h-[500px] mt-10">
            <h1 className="font-bold text-3xl md:text-4xl text-center">Casual</h1>
            <div className="flex flex-wrap flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {
                product.map((data)=>{
                    return(
                        <div key={data.id}>
                        <Link href={`/products/${data.id}`}>
                        <div className="h-[230px] w-[230px] bg-[#FBEEED] rounded-[20px]">
                        <Image src={data.img_url} alt={data.title} width={100} height={100} className="w-full h-full rounded-[20px]"></Image>
                        </div>
                        <div>
                        <p className="text-lg font-bold mt-2">{data.title}</p>
                        <div className="flex text-yellow-400">
                            {star.map((icon,index)=>(
                                <span key={index}>{icon}</span>
                            ))}
                        </div>
                        <p className="font-bold mt-1">{data.price} <span className="text-gray-400 font-bold line-through">{data.old_price}</span></p>
                        </div>
                        </Link>
                        </div>
                    )
                })
                }
            </div>
        </div>
    
    )
}