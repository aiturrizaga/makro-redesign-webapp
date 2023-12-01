export interface Product {
  id: number;
  brand: string;
  name: string;
  slug: string;
  presentation: string;
  image: string;
  rating: number;
  prices: ProductPrice[];
}

export interface ProductPrice {
  currency: string;
  price: number;
  description: string;
  fromUnit: number;
  salient: boolean;
  visible: boolean;
  default: boolean;
}
