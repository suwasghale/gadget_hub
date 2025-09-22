import FeaturedBrands from "@/features/home/components/BrandsSection";
import Category from "@/features/home/components/CategoriesSection";
import HeroSection from "@/features/home/components/HeroSection";
import LaptopGrid from "@/features/products/components/ProductCard";
import TrustSection from "@/features/home/components/TrustSection";

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
