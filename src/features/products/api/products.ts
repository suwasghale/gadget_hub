import { apiFetch } from "@/lib/api";
import type { Product } from "../types/product";

interface ProductAPI {
  id: number;
  name: string;
  price: string;
  original_price: string | null;
  image: string | null;
  is_available: boolean;
}

interface PaginatedResponse<T> {
  count: number;
  results: T[];
}

export interface ProductFilters {
  page?: number;
  brand?: string;
  min_price?: number;
  max_price?: number;
  q?: string;
}

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
    status: api.is_available ? "in-stock" : "out-of-stock",
  };
}

export async function fetchProducts(
  filters: ProductFilters
): Promise<PaginatedResponse<Product>> {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      params.append(key, String(value));
    }
  });

  const data = await apiFetch<PaginatedResponse<ProductAPI>>(
    `products/?${params.toString()}`
  );

  return {
    count: data.count,
    results: data.results.map(mapProduct),
  };
}
