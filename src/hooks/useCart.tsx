import { useReducer, useEffect } from "react";
import { ICart } from "../interfaces/cart";
import { getCartFromSessionStorage } from "../services/productService";
import { cartReducer } from "../reducer/cartReducer";
import { Product } from "../interfaces";

const initialCartItems: ICart[] = getCartFromSessionStorage();

export const useCart = () => {
  const [{ cartItems }, dispatch] = useReducer(cartReducer, {
    cartItems: initialCartItems,
  });

  const onAddProductToCart = (product: Product) => {
    const hasItem = cartItems.find((item) => item.product.id === product.id);

    if (hasItem) {
      dispatch({ type: "[Cart] - UpdateProductCart", payload: product });
    } else {
      dispatch({ type: "[Cart] - AddProductCart", payload: product });
    }
  };

  const onRemoveItem = (id: number | string) => {
    dispatch({
      type: "[Cart] - DeleteProductCart",
      payload: id,
    });
  };

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return {
    cartItems,
    onAddProductToCart,
    onRemoveItem,
  };
};
