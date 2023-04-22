import { products } from "../data/products";
import { ICart } from "../interfaces/cart";

export const getProducts = () => {
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
