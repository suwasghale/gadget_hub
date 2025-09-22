import ProductCard from "./ProductCard";
import type { Product } from "../types/product";

interface ProductGridProps {
  products: Product[];
  columns?: number; // allow dynamic columns
}

const ProductGrid = ({ products, columns = 4 }: ProductGridProps) => {
  return (
    <div
      className={`
        grid gap-6 
        ${columns === 2 ? "grid-cols-1 sm:grid-cols-2" : ""}
        ${columns === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : ""}
        ${columns === 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : ""}
      `}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
