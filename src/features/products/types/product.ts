export interface Product {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  status: 'in-stock' | 'out-of-stock' | 'coming-soon';
  isNew?: boolean;
  freeShipping?: boolean;
  rating?: number;
  reviewCount?: number;
}
