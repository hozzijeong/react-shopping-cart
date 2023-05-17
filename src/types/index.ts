export interface CartItem {
  id: ProductId;
  quantity: number;
  product: Product;
}

export interface Product {
  id: ProductId;
  price: number;
  name: string;
  imageUrl: string;
}

export type ProductId = number;
