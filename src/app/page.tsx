import Fonts from "@/components/fonts";
import Hero from "@/components/Hero";
import Products from "./products/page";
import Top_sell from "./products/sell";
import Dress from "@/components/dress";
import CustomerCarousel from "@/components/Costumer";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Fonts/>
      <Products/>
      <Top_sell/>
      <Dress/>
      <CustomerCarousel/>
      
    </div>
  );
}
