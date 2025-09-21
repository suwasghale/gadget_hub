import FeaturedBrands from "@/components/Brands";
import Category from "@/components/Category";
import HeroSection from "@/components/Hero";
import LaptopGrid from "@/components/LaptopCard";
import TrustSection from "@/components/TrustAndSupport";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <Category/>
    <LaptopGrid/>

    <FeaturedBrands/>
    <TrustSection/>
   </div>
  );
}
