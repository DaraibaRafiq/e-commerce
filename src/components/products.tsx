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
        title:"Polo with Contrast trims",
        id:9,
        price:"$212",
        img_url:"/shirt1.png",
        old_price:"$232"
    },
    {
        title:"Gradient Graphic T-SHIRT",
        id:10,
        price:"$145",
        img_url:"/shirt2.png",
    },
    {
        title:"Polo with Tipping Details",
        id:11,
        price:"$80",
        img_url:"/shirt3.png"
    },
    {
        title:"Black Stripped T-Shirt",
        id:12,
        price:"$210",
        img_url:"/shirt4.png",
    }
]
let star = [
<FaStar key={1}/>,
<FaStar key={2} />,
<FaStar key={3}/>,
<FaStar key={4}/>,
<FaStar key={5}/>,
]

export default function Tshirts(){
    return(
        <div className="w-full h-full sm:h-[500px] mt-10 max-w-screen-2xl mx-auto">
            <h1 className="font-bold text-3xl md:text-4xl text-center">TOP SELLING</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {
                product.map((data)=>{
                    return(
                        <div key={data.id}>
                         <Link href={`/products/${data.id}`}>
                        <div className="h-[230px] w-[230px] bg-[#FBEEED] rounded-[20px]">
                        <Image src={data.img_url} alt={data.title} width={100} height={100} className="w-full h-full rounded-[20px]"></Image>
                        </div>
                        </Link>
                        
                        <div>
                        <p className="text-lg font-bold mt-2">{data.title}</p>
                        <div className="flex text-yellow-400">
                            {star.map((icon,index)=>(
                                <span key={index}>{icon}</span>
                            ))}
                        </div>
                        <p className="font-bold mt-1">{data.price} <span className="text-gray-400 font-bold line-through">{data.old_price}</span></p>
                        </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    
    )
}