import { apiFetch } from "./api";

export interface Product {
  id: number;
  name: string;
  price: string;
  description?: string;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export function getProducts() {
  return apiFetch<PaginatedResponse<Product>>("products/");
}
