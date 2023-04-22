import { Product } from ".";

export interface ICart {
  product: Product;
  quantity: number;
  total: number;
}
