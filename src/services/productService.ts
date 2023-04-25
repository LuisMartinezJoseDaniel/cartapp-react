import { Product } from "../interfaces";
import { ICart } from "../interfaces/cart";

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch("http://localhost:8000/api/products");
  const products = await res.json();
  console.log({ products });

  return products;
};

export const calculateTotal = (cartItems: ICart[]) => {
  const total = cartItems.reduce((prev, current) => {
    return prev + current.total * current.quantity;
  }, 0);

  return total;
};

export const getCartFromSessionStorage = (): ICart[] => {
  const cart = sessionStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};
