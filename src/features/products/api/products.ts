import { apiFetch } from "@/lib/api";
import type { Product } from "../types/product";
import type { PaginatedResponse } from "@/features/products/types/product";

/* Backend response shape */
interface ProductAPI {
  id: number;
  name: string;
  price: string;
  original_price: string | null;
  image: string | null;
  is_active: boolean;
  created_at: string;
}

/* Map backend → frontend */
function mapProduct(api: ProductAPI): Product {
  const price = Number(api.price);
  const original = api.original_price
    ? Number(api.original_price)
    : price;

  const discount =
    original > price
      ? Math.round(((original - price) / original) * 100)
      : 0;

  return {
    id: api.id,
    name: api.name,
    image: api.image ?? "/placeholder.png",
    currentPrice: price,
    originalPrice: original,
    discount,
    status: api.is_active ? "in-stock" : "out-of-stock",
    isNew: false,
    freeShipping: true,
    rating: 4.5,      // temporary
    reviewCount: 0,   // temporary
  };
}

/* PAGE SIZE */
const PAGE_SIZE = 9;

/* Fetch paginated products */
export async function fetchProducts(page = 1) {
  const offset = (page - 1) * PAGE_SIZE;

  const data = await apiFetch<PaginatedResponse<ProductAPI>>(
    `products/?limit=${PAGE_SIZE}&offset=${offset}`
  );

  return {
    count: data.count,
    next: data.next,
    previous: data.previous,
    results: data.results.map(mapProduct),
  };
}
