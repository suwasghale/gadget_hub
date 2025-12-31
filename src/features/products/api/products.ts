import { apiFetch } from "@/lib/api";
import type { Product } from "../types/product";

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

/* Paginated response */
interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
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
    isNew: false, // you can compute later
    freeShipping: true,
    rating: 4.5, // temporary
    reviewCount: 0,
  };
}

/* Fetch products */
export async function fetchProducts(): Promise<Product[]> {
  const data = await apiFetch<PaginatedResponse<ProductAPI>>(
    "products/"
  );

  return data.results.map(mapProduct);
}
