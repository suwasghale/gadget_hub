// "use client";
// import { useEffect, useState } from "react";
// import ProductFilterSidebar from "@/features/products/components/ProductFilterSidebar";
// import ProductGrid from "@/features/products/components/ProductGrid";
// import type { Product } from "@/features/products/types/product";
// import { fetchProducts } from "@/features/products/api/products";


// const products: Product[] = [
//   {
//     id: 1,
//     name: "Lenovo IdeaPad Slim 3 15IAN8",
//     image: "https://mudita.com.np/media/catalog/product/cache/278abbc8911ee5bd8d9d36ef904a805f/l/e/lenovo-ideapad-slim-3-15ian8-price-in-nepal_1.webp",
//     currentPrice: 48999,
//     originalPrice: 62000,
//     discount: 21,
//     status: "out-of-stock",
//     isNew: true,
//     freeShipping: true,
//     rating: 4.5,
//     reviewCount: 124,
//   },
//   { 
//     id: 2, 
//     name: "HP Pavilion 15-eg2xxx (12th Gen Intel Core i5 | 16GB RAM | 1TB SSD | Windows 11)", image: "https://mudita.com.np/media/catalog/product/cache/278abbc8911ee5bd8d9d36ef904a805f/h/p/hp-notebook-14s-price-in-nepal.webp", 
//     currentPrice: 65999, 
//     originalPrice: 78000, 
//     discount: 15, 
//     status: 'in-stock', 
//     isNew: false, 
//     freeShipping: true, 
//     rating: 4.3, 
//     reviewCount: 89
//     }, 
//     { 
//         id: 3, 
//         name: "Dell Inspiron 15 3525 (AMD Ryzen 5 5500U | 8GB RAM | 512GB SSD | Ubuntu Linux)", image: "https://mudita.com.np/media/catalog/product/cache/278abbc8911ee5bd8d9d36ef904a805f/v/o/vostro-3520-laptop-02_2_1.jpg", 
//         currentPrice: 54999, 
//         originalPrice: 64000, 
//         discount: 14, 
//         status: 'coming-soon', 
//         isNew: true, 
//         freeShipping: true, 
//         rating: 4.7, 
//         reviewCount: 203 
//     }, 
//     { 
//         id: 4, 
//         name: "ASUS VivoBook 15 X515EA (11th Gen Intel Core i3 | 8GB RAM | 256GB SSD | Windows 11)", 
//         image: "https://mudita.com.np/media/catalog/product/cache/036aa47742df3225beb764097d8b4fe8/a/s/asus_laptops.webp", 
//         currentPrice: 42999, 
//         originalPrice: 52000, 
//         discount: 17, 
//         status: 'in-stock', 
//         isNew: false, 
//         freeShipping: false, 
//         rating: 4.1, 
//         reviewCount: 67 
//     }, 
//     { 
//         id: 5, 
//         name: "Acer Aspire 5 A515-57 (12th Gen Intel Core i5 | 16GB RAM | 512GB SSD | Windows 11 Home)", 
//         image: "https://mudita.com.np/media/catalog/product/cache/278abbc8911ee5bd8d9d36ef904a805f/a/c/acer-aspire-3-15-price-in-nepal_1.webp", currentPrice: 58999, 
//         originalPrice: 68000, 
//         discount: 13, 
//         status: 'in-stock', 
//         isNew: true, 
//         freeShipping: true, 
//         rating: 4.4, 
//         reviewCount: 156 
//     }, 
//     { 
//         id: 6, 
//         name: "MSI Modern 14 C12M (12th Gen Intel Core i5 | 8GB RAM | 512GB SSD | Windows 11)", image: "https://mudita.com.np/media/catalog/product/cache/036aa47742df3225beb764097d8b4fe8/m/s/msi-cyborg-15-ai-a1vfk-price-in-nepal.webp", currentPrice: 61999, 
//         originalPrice: 72000, 
//         discount: 14, 
//         status: 'out-of-stock', 
//         isNew: false, 
//         freeShipping: true, 
//         rating: 4.6, 
//         reviewCount: 91 
//     }, 
//     { 
//         id: 7, 
//         name: "Lenovo ThinkPad E14 Gen 4 (AMD Ryzen 5 5625U | 16GB RAM | 512GB SSD | Windows 11 Pro)",
//         image: "https://mudita.com.np/media/catalog/product/cache/036aa47742df3225beb764097d8b4fe8/l/e/lenovo-yoga-9i-14imh9-price-in-nepal_1.webp", currentPrice: 72999, 
//         originalPrice: 85000, 
//         discount: 14, 
//         status: 'coming-soon', 
//         isNew: true, 
//         freeShipping: true, 
//         rating: 4.8, 
//         reviewCount: 234 
//     }, 
//     { 
//         id: 8, 
//         name: "HP Envy 13-ba1xxx (11th Gen Intel Core i7 | 16GB RAM | 1TB SSD | Windows 11 Home)", 
//         image: "https://mudita.com.np/media/catalog/product/cache/036aa47742df3225beb764097d8b4fe8/h/p/hp-spectre-x360-ultra-7-price-in-nepal.webp", currentPrice: 84999, 
//         originalPrice: 98000, 
//         discount: 13, 
//         status: 'in-stock', 
//         isNew: false, 
//         freeShipping: false, 
//         rating: 4.5, 
//         reviewCount: 178 
//     } 
// ];



// const ProductsPage = () => {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Page Heading */}
//         <div className="mb-8 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">
//             All Products
//           </h2>
//           <p className="text-gray-600">
//             Discover all the products we offer.
//           </p>
//         </div>

//         {/* Two-column layout */}
//         <div className="flex gap-8">
//           {/* Sidebar (sticky on desktop, collapsible on mobile) */}
//           <aside className="hidden lg:block w-80 shrink-0">
//             <ProductFilterSidebar />
//           </aside>

//           {/* Product grid area */}
//           <div className="flex-1">
//             <ProductGrid products={products} columns={3} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsPage;


"use client";

import { useEffect, useState } from "react";
import ProductFilterSidebar from "@/features/products/components/ProductFilterSidebar";
import ProductGrid from "@/features/products/components/ProductGrid";
import { fetchProducts } from "@/features/products/api/products";
import type { Product } from "@/features/products/types/product";

const PAGE_SIZE = 9;

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchProducts(page)
      .then((data) => {
        setProducts(data.results);
        setCount(data.count);
      })
      .finally(() => setLoading(false));
  }, [page]);

  const totalPages = Math.ceil(count / PAGE_SIZE);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">All Products</h2>
        </div>

        <div className="flex gap-8">
          <aside className="hidden lg:block w-80">
            <ProductFilterSidebar />
          </aside>

          <div className="flex-1">
            {loading ? (
              <p>Loading…</p>
            ) : (
              <>
                <ProductGrid products={products} columns={3} />

                {/* Pagination */}
                <div className="flex justify-center mt-8 gap-4">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                  >
                    Previous
                  </button>

                  <span>
                    Page {page} of {totalPages}
                  </span>

                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => p + 1)}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
