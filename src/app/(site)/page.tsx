import FeaturedBrands from "@/features/home/components/BrandsSection";
import Category from "@/features/home/components/CategoriesSection";
import HeroSection from "@/features/home/components/HeroSection";
import TrustSection from "@/features/home/components/TrustSection";
import FeaturedProductsSection from "@/features/home/components/FeaturedProductsSection";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <Category/>
    <FeaturedProductsSection/>
    <FeaturedBrands/>
    <TrustSection/>
   </div>
  );
}
