// app/components/FeaturedBrands.tsx
"use client";

import Image from "next/image";
import {Facebook} from 'lucide-react'
type Brand = {
  name: string;
  logo: string;
  alt: string;
};

const brands: Brand[] = [
  { name: "Apple", logo: "/brands/apple.svg", alt: "Apple Logo" },
  { name: "Dell", logo: "/brands/dell.svg", alt: "Dell Logo" },
  { name: "HP", logo: "/brands/hp.svg", alt: "HP Logo" },
  { name: "BenQ", logo: "/brands/acer.svg", alt: "Acer Logo" },
  { name: "Asus", logo: "/brands/asus.svg", alt: "Asus Logo" },
  { name: "Lenovo", logo: "/brands/lenovo.svg", alt: "Lenovo Logo" },
  { name: "LG", logo: "/brands/lg.svg", alt: "Lg Logo" },
  { name: "Samsung", logo: "/brands/samsung.svg", alt: "Samsung Logo" },
  { name: "Huawei", logo: "/brands/huawei.svg", alt: "Huawei Logo" },
  { name: "Sony", logo: "/brands/sony.svg", alt: "Sony Logo" },
  { name: "Panasonic", logo: "/brands/panasonic.svg", alt: "Panasonic Logo" },
  { name: "DJI", logo: "/brands/dji.svg", alt: "DJI Logo" },
  { name: "Nikon", logo: "/brands/nikon.svg", alt: "Nikon Logo" },
  { name: "Logitech", logo: "/brands/logitech.svg", alt: "Logitech Logo" },
  { name: "JBL", logo: "/brands/jbl.svg", alt: "JBL Logo" },
  { name: "Bose", logo: "/brands/bose.svg", alt: "Bose Logo" },
];

export default function FeaturedBrands() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
          Featured Brands
        </h2>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 sm:gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer"
            >
              <Image
                src={brand.logo}
                alt={brand.alt}
                width={120}
                height={60}
                className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
